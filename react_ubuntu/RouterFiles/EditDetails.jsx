import React from 'react';
import $ from 'jquery';
import datePicker from 'react-datepicker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import {orange500, blue500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import EditDetails from './EditDetails.jsx';

class Archive extends React.Component {

   constructor(props){
      super(props);
      this.state = {
        phoneNumber:'',
        userName:this.props.response[0].username,
        lastName:this.props.response[0].lastName,
        date:new Date(this.props.response[0].date),
        email:this.props.response[0].email,
        address:this.props.response[0].address,
        phoneNumber:this.props.response[0].phoneNumber,
        password:this.props.response[0].password
      }
   }

  setFirstName(event){
      this.setState({userName:event.target.value})
   }

  setLastName(event){
      this.setState({lastName:event.target.value})
  }
  setPassword(event){
    this.setState({password:event.target.value})
  }
  setDate(value,date){
    this.setState({date:date});
  }
  setEmail(event){
    this.setState({email:event.target.value});
  }
  setAddress(event){
    this.setState({address:event.target.value})
  }
  setPhoneNumber(event){
    this.setState({phoneNumber:event.target.value});
  }
  updateDetails(){
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

    $.post('http://localhost:3000/update',formdata,function(response){
      console.log('response',response);
    });
  }

   render() {

      var self = this;
      console.log('response',this.props.response);
      return (
          <div className = "detailsPage">
           <FlatButton label="Update" primary={true} onClick = {this.updateDetails.bind(this)}/>
            <div>
                  <TextField
                  floatingLabelText="Enter First Name"
                  underlineFocusStyle={{borderColor:"black"}}
                  floatingLabelFocusStyle = {{color:"black"}}
                  value = {this.state.userName}
                  onChange = {this.setFirstName.bind(this)}
                  />
            </div>
            <div className = "lastName">
                <TextField
                floatingLabelText="Enter Last Name"
                underlineFocusStyle={{borderColor:"black"}}
                floatingLabelFocusStyle = {{color:"black"}}
                value = {this.state.lastName}
                onChange = {this.setLastName.bind(this)}
                />
            </div>
            <br/>
            <div className = "password">
                <TextField
                floatingLabelText="Enter password"
                underlineFocusStyle={{borderColor:"black"}}
                floatingLabelFocusStyle = {{color:"black"}}
                value = {this.state.password}
                type = "password"
                onChange = {this.setPassword.bind(this)}
                />
            </div>
            <br/>
             <div>
                <DatePicker value = {this.state.date}  mode="landscape" hintText="Select Your Birthdate" onChange = {this.setDate.bind(this)}/>
            </div>
            <TextField
              floatingLabelText="Enter email address"
              type = "email"
              underlineFocusStyle={{borderColor:"black"}}
              floatingLabelFocusStyle = {{color:"black"}}
              value = {this.state.email}
              onChange = {this.setEmail.bind(this)}
             /><br />
             <div className = "address">
                <TextField
                floatingLabelText="Enter Your Address"
                underlineFocusStyle={{borderColor:"black"}}
                floatingLabelFocusStyle = {{color:"black"}}
                onChange = {this.setAddress.bind(this)}
                value = {this.state.address}
                />
             </div>
             <div className = "phoneNumber">
                <TextField
                floatingLabelText="Enter Your phoneNumber"
                errorText = {this.state.phoneNumberError}
                value = {this.state.phoneNumber}
                underlineFocusStyle={{borderColor:"black"}}
                floatingLabelFocusStyle = {{color:"black"}}
                onChange = {this.setPhoneNumber.bind(this)}
                />
            </div>
          </div>
      );
   }
}

export default Archive;
