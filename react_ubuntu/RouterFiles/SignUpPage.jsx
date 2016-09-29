import React from 'react';
import $ from 'jquery';
import datePicker from 'react-datepicker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import {orange500, blue500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';


class Archive extends React.Component {

   constructor(props){
      super(props);
      this.state = {

        emailId:'',
        emailIdError:'',
        phoneNumber:'',
        userName:'',
        lastName:'',
        date:'',
        email:'',
        address:'',
        phoneNumber:'',
        password:''
      }
   }

   emailChange(event){

    this.setState({emailId:event.target.value})

   }
    
   validateMail(){
    if(this.state.emailId.length > 0){
      if(this.state.emailId.indexOf('@') === -1 && this.state.emailId.indexOf('@') === -1){
          this.setState({emailIdError:'Email Must Contain @ & .'});
      }else{
        this.setState({emailIdError:''});
      }
     }
    } 
  
  setFirstName(event){
      this.setState({userName:event.target.value})
  }

  setLastName(event){
      this.setState({lastName:event.target.value})
  }

  phoneNumberChange(event){
      this.setState({phoneNumber:event.target.value.replace(/[a-z]/g,'')})
  }

  setDate(value,date){
    this.setState({date:date});
  }
  setPassword(event){
    this.setState({password:event.target.value})
  }
  setEmail(event){
    this.setState({email:event.target.value});
  }
  setPhoneNumber(event){
    this.setState({phoneNumber:event.target.value});
  }
  setAddress(event){
    this.setState({address:event.target.value})
  }
  signUpUser(){
    var self = this;
    var formdata = {
      username:this.state.userName,
      lastName:this.state.lastName,
      date:this.state.date,
      email:this.state.email,
      address:this.state.address,
      phoneNumber:this.state.phoneNumber,
      password:this.state.password
    }

    $.post('http://localhost:3000/signUp',formdata,function(response){
      console.log('response',response);
    });
  }

   render() {

      var self = this;
      return (
          <div className = "signUpPage" onClick = {this.validateMail.bind(this)}>
            <div className = "loginSectionWrapper">
              Lets get you started in a moment
                <div>
                  <TextField
                  floatingLabelText="Enter First Name"
                  underlineFocusStyle={{borderColor:"black"}}
                  floatingLabelFocusStyle = {{color:"black"}}
                  onChange = {this.setFirstName.bind(this)}
                  />
                </div>
            <div className = "lastName">
                <TextField
                floatingLabelText="Enter Last Name"
                underlineFocusStyle={{borderColor:"black"}}
                floatingLabelFocusStyle = {{color:"black"}}
                onChange = {this.setLastName.bind(this)}
                />
            </div>
            <br/>
            <div className = "password">
                <TextField
                floatingLabelText="Enter password"
                underlineFocusStyle={{borderColor:"black"}}
                floatingLabelFocusStyle = {{color:"black"}}
                onChange = {this.setPassword.bind(this)}
                />
            </div>
            <br/>
            <div>
                <DatePicker mode="landscape" hintText="Select Your Birthdate" onChange = {this.setDate.bind(this)}/>
            </div>
              <TextField
                floatingLabelText="Enter email address"
                type = "email"
                errorText = {this.state.emailIdError}
                onChange = {this.emailChange.bind(this)}
                underlineFocusStyle={{borderColor:"black"}}
                floatingLabelFocusStyle = {{color:"black"}}
                onChange = {this.setEmail.bind(this)}
               /><br />
              <div className = "address">
                <TextField
                floatingLabelText="Enter Your Address"
                underlineFocusStyle={{borderColor:"black"}}
                floatingLabelFocusStyle = {{color:"black"}}
                onChange = {this.setAddress.bind(this)}
                />
              </div>
              <div className = "phoneNumber">
                <TextField
                floatingLabelText="Enter Your phoneNumber"
                errorText = {this.state.phoneNumberError}
                onChange = {this.phoneNumberChange.bind(this)}
                value = {this.state.phoneNumber}
                underlineFocusStyle={{borderColor:"black"}}
                floatingLabelFocusStyle = {{color:"black"}}
                onChange = {this.setPhoneNumber.bind(this)}
                />
              </div>
            </div>
            <FlatButton label="Sign Up" primary={true} onClick = {this.signUpUser.bind(this)}/>
        </div>
      );
   }
}

export default Archive;
