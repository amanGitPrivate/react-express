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
        editPage:false
      }
   }

   openEditPage(){
    this.setState({editPage:true})
   }
  
   render() {

      var self = this;
      console.log('response',this.props.response);
      return (
          <div className = "detailsPage">
           {

            this.state.editPage

             ?

             <EditDetails response = {this.props.response}/>

             :
           <div>  
            <FlatButton label="Edit" primary={true} onClick = {this.openEditPage.bind(this)}/>
            <div>
                <TextField
                   underlineFocusStyle={{borderColor:"black"}}
                   floatingLabelFocusStyle = {{color:"black"}}
                   value = {this.props.response[0].username}
                   />
             </div>
             <div className = "lastName">
                 <TextField
                 underlineFocusStyle={{borderColor:"black"}}
                 floatingLabelFocusStyle = {{color:"black"}}
                 value = {this.props.response[0].lastName}
                 />
              </div>
              <br/>
              <div className = "password">
                 <TextField
                 underlineFocusStyle={{borderColor:"black"}}
                 floatingLabelFocusStyle = {{color:"black"}}
                 value = {this.props.response[0].password}
                 type = "password"
                 />
              </div>
              <br/>
              <div>
                   <DatePicker value = {new Date(this.props.response[0].date)} mode="landscape" hintText="Select Your Birthdate"/>
              </div>
              <TextField
                 floatingLabelText="Enter email address"
                 type = "email"
                 errorText = {this.state.emailIdError}
                 underlineFocusStyle={{borderColor:"black"}}
                 floatingLabelFocusStyle = {{color:"black"}}
                 value = {this.props.response[0].email}
              /><br />
              <div className = "address">
                 <TextField
                 floatingLabelText="Enter Your Address"
                 underlineFocusStyle={{borderColor:"black"}}
                 floatingLabelFocusStyle = {{color:"black"}}
                 value = {this.props.response[0].address}
                 />
              </div>
              <div className = "phoneNumber">
               <TextField
               floatingLabelText="Enter Your phoneNumber"
               errorText = {this.state.phoneNumberError}
               value = {this.state.phoneNumber}
               underlineFocusStyle={{borderColor:"black"}}
               floatingLabelFocusStyle = {{color:"black"}}
               value = {this.props.response[0].phoneNumber}
               />
              </div>
            </div>   
                       }
          </div>
      );
   }
}

export default Archive;
