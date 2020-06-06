import React, { Component } from "react";
import SignIn from "../../components/Authentication/SignIn";
import { login } from "./UserFunctions";

class SignInHandler extends Component {
  state = {
    email: null,
    password: null,
    errorMessage: null,
    isChecked: false,
  };

  componentDidMount() {
    // if (localStorage.checkbox ) {
    this.setState({
      isChecked: localStorage.checkbox,
      email: localStorage.email,
      password: localStorage.password,
    });
  }
  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  isCheckedHandler = (event) => {
    this.setState({ isChecked: event.target.checked });
  };

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.email !== null && this.state.password !== null) {
      console.log("submit signin", this.state.email, this.state.password);
    }

    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    const { email, password, isChecked } = this.state;
    console.log(this.state.isChecked);
    if (isChecked) {
      localStorage.email = email;
      localStorage.password = password;
      localStorage.checkbox = true;
    } else {
      localStorage.email = "";
      localStorage.password = "";
      localStorage.checkbox = false;
    }

    //console.log(this.state.isChecked);

    //console.log('hello');
    
    login(user).then(res=>{
      if(res!="Invalid email or password,please try again"){
        console.log(res);
        localStorage.first_name = res.first_name  ? res.first_name : "";
        localStorage.last_name = res.last_name  ? res.last_name : "";
        localStorage.zip = res.zip  ? res.zip : "";
        localStorage.address1 = res.address1  ? res.address1 : "";
        localStorage.address2 = res.address2  ? res.address2 : "";
        localStorage.city = res.city  ? res.city : "";
        localStorage.country = res.country  ? res.country : "";
        localStorage.province = res.province  ? res.province : "";
        this.props.history.push('/')
       }
       else{
         this.setState({errorMessage:res})
         console.log(this.state.errorMessage);
     }
      
     }
    )
  
    
  
    
    console.log("hello");

    login(user).then((res) => {
      console.log(res);
      if (!res) {
        this.props.history.push("/");
      } else {
        this.setState({ errorMessage: res });
        //console.log(this.state.errorMessage);
      }
    });

  };

  render() {
    var err = null;

    return (
      <SignIn
        email={this.state.email}
        password={this.state.password}
        isChecked={this.state.isChecked}
        err={this.state.errorMessage}
        onChangeValue={this.onChangeValue}
        submitHandler={this.submitHandler}
        isCheckedHandler={this.isCheckedHandler}
      />
    );
  }
}

export default SignInHandler;
