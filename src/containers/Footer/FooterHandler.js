import React , {Component} from "react";
import Footer from "../../components/Footer/Footer"

import * as emailjs from 'emailjs-com'

class FooterHandler extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
  handleSubmit=(e)=> {
      e.preventDefault()
     
      const { email, message } = this.state
      
      let templateParams = {
        from_name: email,
        to_name: 'e15076@eng.pdn.ac.lk',
        message_html: message,
       }
       emailjs.send(
        'gmail',
        'template_r6tkefMg',
         templateParams,
        'user_FvSk9bbvvFCbs7vDAYm7T'
       )
       console.log(this.state.name);
       this.resetForm()

   }
  resetForm() {
      this.setState({
        name: '',
        email: '',
        message: '',
      })

      
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
      }

      render() {
        
        return (
            <Footer 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            name={this.state.name}
            email={this.state.email}
            message={this.state.message}/>
        );
    }


}
export default FooterHandler;