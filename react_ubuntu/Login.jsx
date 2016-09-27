import React from 'react';
import $ from 'jquery';

class App extends React.Component {

  constructor(props){
     super(props);
     this.state = {
       userArray:[],
       loggedIn:false
     }
  }

  signIn(){
    var self = this;
    var formdata = {
      username:$('#inputEmail').val(),
      password:$('#inputPassword').val()
    }
    $.post('http://localhost:3000/login',formdata,function(response){
      console.log('response',response);
      self.setState({userArray:response,loggedIn:true});
    });
  }

  signUp(){
    var self = this;
    var formdata = {
      username:$('#inputEmail').val(),
      password:$('#inputPassword').val()
    }
    $.post('http://localhost:3000/signUp',formdata,function(response){
      console.log('response',response);
      self.setState({userArray:response,loggedIn:true});
    });
  }

   render() {
        return (

          <div className="col-md-12">
              {!this.state.loggedIn ? "Please Enter": this.state.userArray.length > 0 ? "Welcome "+this.state.userArray[0].username : "Wrong User"}
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="text" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
              <div className="checkbox">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember me
                </label>
              </div>
              <button className="btn btn-primary btn-block" onClick = {this.signIn.bind(this)}>Sign in</button>
              <button className="btn btn-primary btn-block" onClick = {this.signUp.bind(this)}>Sign Up</button>
          </div>
        );
   }


}



export default App;
