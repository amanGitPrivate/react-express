import React from 'react';
import WelcomePage from './RouterFiles/Welcome.jsx';
import TextField from 'material-ui/TextField';
import SignUpPage from './RouterFiles/SignUpPage.jsx';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import $ from 'jquery';

class App extends React.Component {

  constructor(props){
     super(props);
     this.state = {
       showWelcome:false,
       password:'',
       username:'',
       signUpPage:false,
       open:false,
       openPassword:false
     }
  }

  handleClose(){
    this.setState({open: false});
  }  

  handleClosePass(){
    this.setState({openPassword: false});
  };

  signIn(){
    var self = this;
    var formdata = {
      username:this.state.username,
      password:this.state.password
    }
    $.post('http://localhost:3000/login',formdata,function(response){
      console.log('response',response);
      if(typeof(response) == "object"){
        self.setState({showWelcome:true});
      }
      else if(response === "wrongusername"){
          self.setState({open:true,openPassword:false});
      }else if(response = "wrongpassword"){
          self.setState({openPassword:true,open:false});
      }
    });
  }

  setUserName(e){
      this.setState({username:e.target.value});
  }

  setPassword(e){
      this.setState({password:e.target.value});
  }

  showSignUp(){

    this.setState({signUpPage:true})

  }

   render() {
        return (

          <div className="mainContainer" id="loginForm">
              {
               this.state.signUpPage 

               ?
                 
                    <SignUpPage/>
                
                :
              
              !this.state.showWelcome
                ?
                  <div className = "form-signin">
                    <div className = "signIn">Sign In</div>
                    <div className = "userNameSection">
                        <TextField
                          floatingLabelText="Enter Your UserName"
                          onChange = {this.setUserName.bind(this)}
                         /><br />
                        <Dialog
                          title="Empty or Incorrect UserName"
                          modal={false}
                          open={this.state.open}
                          onRequestClose={this.handleClose.bind(this)}
                         >
                        </Dialog>                    
                    </div>
                    <div className = "passwordSection">
                    <TextField
                      floatingLabelText="Enter Your Password"
                      type = "password"
                      onChange = {this.setPassword.bind(this)}
                     /><br />
                     <Dialog
                          title="Incorrect Password"
                          modal={false}
                          open={this.state.openPassword}
                          onRequestClose={this.handleClosePass.bind(this)}
                         >
                        </Dialog>     
                    </div>
                    <FlatButton label="Sign In" primary={true} onClick = {this.signIn.bind(this)}/>
                    <FlatButton label="Sign Up" primary={true} onClick = {this.showSignUp.bind(this)}/>
                 </div>  
                :
                <WelcomePage/>
              }
          </div>
        );
   }


}



export default App;
