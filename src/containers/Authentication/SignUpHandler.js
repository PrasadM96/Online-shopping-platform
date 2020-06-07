import React, { Component } from "react";
import SignUp from "../../components/Authentication/Signup";
import {register} from './UserFunctions';
import PropTypes from "prop-types";

class SignUpHandler extends Component {
   
  state = {
        first_name:"",
        last_name:"",
        email: "",
        password: "",
        confirm:"",
        firstnameError:"",
        lastnameError:"",
        emailError:"",
        passwordErr:"",
        errorMessage:"",
        confirmErr:""
        
  }


  emailHandler = event => {
    this.setState({ email: event.target.value });
    //console.log(event.target.value);
  };

  passwordHandler = event => {
    this.setState({ password: event.target.value });
  };

  confirmpasswordHandler = event => {
    this.setState({ confirm: event.target.value });
  };

  
  firstnameHandler = event => {
    this.setState({ first_name: event.target.value });
  };

  
  lastnameHandler = event => {
    this.setState({ last_name: event.target.value });
  };

  validate = () => {
    let isError = false;
    const errors={
      firstnameError:"",
        lastnameError:"",
        emailError:"",
        passwordErr:"",
        errorMessage:"",
        confirmErr:"",
    };

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!this.state.first_name.length){
      isError=true;
      errors.firstnameError="First name required"
    }

    if(!this.state.last_name.length){
      isError=true;
      errors.lastnameError="Last name required"

    }

    if(!reg.test(this.state.email)){
      //console.log("email error")
      isError=true;
      errors.emailError="Invalid email address"

    }

    const passwordRegex = /(?=.*[0-9])/;
      if (!this.state.password) {
        errors.passwordErr= "Required";
        isError=true;
      } else if (this.state.password.length < 8) {
        errors.passwordErr = "Password must be 8 characters long.";
        isError=true;
      } else if (!passwordRegex.test(this.state.password)) {
        errors.passwordErr = "Invalida password. Must contain one number";
        isError=true;
      }

      if(this.state.confirm!=this.state.password){
        isError=true;
        errors.confirmErr="Password is not matched"
        console.log("error")
      }

   /* if(this.state.password.length<8){
      isError=true;
      errors.passwordErr="Password need to be atleast 8 characters"

    }*/
    if(isError){
      this.setState({
        ...this.state,
        ...errors
      });
    }

    return isError;
  }; 

  submitHandler = e => {
    e.preventDefault();
    if (this.state.email !== null && this.state.password !== null) {
      console.log("submit sigup ", this.state.email, this.state.password);
    }

    const err = this.validate();
    if(!err){
      this.setState({
        
        firstnameError:"",
        lastnameError:"",
        emailError:"",
        passwordErr:"",
        confirmErr:"",
      });
    

     
     
    
    const user = {
        first_name : this.state.first_name,
        last_name  :this.state.last_name,
        email:this.state.email,
        password:this.state.password
    }
    console.log(this.state.last_name);
   // console.log(this.state.isChecked)
   console.log(this.state.emailError);
   register(user).then(res => {
     console.log(res);
     if(res=='success'){
      this.props.history.push('./signin')
    
     }
     else{
      this.setState({errorMessage:res})
      
      //console.log(this.state.emailError);
     }
    
    })
    
    }
  };

  render() {
   
   var err=null
    return (
      <SignUp
        err={this.state.errorMessage}
        firstnameHandler={this.firstnameHandler}
        lastnameHandler={this.lastnameHandler}
        emailHandler={this.emailHandler}
        passwordHandler={this.passwordHandler}
        confirmpasswordHandler={this.confirmpasswordHandler}
        submitHandler={this.submitHandler}
        firstnameError={this.state.firstnameError}
        lastnameError={this.state.lastnameError}
        emailError={this.state.emailError}
        passwordErr={this.state.passwordErr}
        confirmErr={this.state.confirmErr}
      />
    );
  }
}

export default SignUpHandler;
