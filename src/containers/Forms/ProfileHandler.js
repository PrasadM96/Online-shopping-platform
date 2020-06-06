import React, { Component } from "react";
import Profile from "../../components/Forms/Profile";
import {profile} from '../Authentication/UserFunctions'

class ProfileHandler extends Component {
  state = {
    firstname: null,
    lastname: null,
    address1:null,
    address2:null,
    city:null,
    zip:null,
    country:null,
    province:null,
    user_id:null,
    
  };

  componentDidMount() {
    // if (localStorage.checkbox ) {
         this.setState({
             user_id:localStorage.user_id,
             firstname:localStorage.first_name,
             lastname:localStorage.last_name,
             address1:localStorage.country,
             address2:localStorage.address2,
             city:localStorage.city,
             zip:localStorage.zip,
             province:localStorage.province,
             country:localStorage.country
         })
 
        }
  /*componentDidMount() {
   // if (localStorage.checkbox ) {
        this.setState({
            isChecked: localStorage.checkbox,
            email: localStorage.email,
            password: localStorage.password
        })

    
}*/
onChangeValue = event => {
  this.setState({
      [event.target.name]: event.target.value
  })
  
}
  /*isCheckedHandler=event=>{
    this.setState({isChecked:event.target.checked})
  }*/

  

  submitHandler = e => {
    e.preventDefault();
    if (this.state.firstname !== null ) {
      console.log("submit signin");

  
    }
   
    const user = {
      firstname : this.state.firstname,
      lastname  :this.state.lastname,
      address1:this.state.address1,
      address2:this.state.address2,
      city:this.state.city,
      zip:this.state.zip,
      country:this.state.country,
      province:this.state.province,
      user_id:this.state.user_id

  }

  profile(user).then(res => {
    console.log(res);
    localStorage.first_name = res.first_name
    localStorage.last_name =  res.last_name
    localStorage.city = res.city
    localStorage.address1 = res.address1
    localStorage.address2 = res.address2
    localStorage.country = res.country
    localStorage.zip = res.zip
    localStorage.province = res.province

   
    
    
   
   })
  /*  const user={
      email:this.state.email,
      password:this.state.password
    }
    const { email, password, isChecked } = this.state
    console.log(this.state.isChecked)
    if (isChecked) {
      localStorage.email = email
      localStorage.password = password
      localStorage.checkbox = true
    
  }else{
    localStorage.email = ""
    localStorage.password = ""
    localStorage.checkbox=false
  }

  
    //console.log(this.state.isChecked);
    //console.log('hello');
    
    login(user).then(res=>{
      if(res!="Invalid email or password,please try again"){
        console.log("logged");
        this.props.history.push('/')
       }
       else{
         this.setState({errorMessage:res})
         console.log(this.state.errorMessage);
     }
      
     }
    )
  
    */
  
    
  };

  render() {
    var err=null
   
    
    return (
      <Profile
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        address1={this.state.address1}
        address2= {this.state.address2}
        city= {this.state.city}
        zip= {this.state.zip}
        province={this.state.province}
        country= {this.state.country}
        onChangeValue ={this.onChangeValue }
        submitHandler={this.submitHandler}
        
        
        
      />
    );
  }
}

export default ProfileHandler;
