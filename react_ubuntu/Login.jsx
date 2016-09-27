import React from 'react';
import $ from 'jquery';

class App extends React.Component {

  signIn(){
    var self = this;
    var formdata = {
      username:$('#inputEmail').val(),
      password:$('#inputPassword').val()
    }
    //  $.ajax({
    //         type:'GET',
    //         url: 'http://localhost:3000',
    //         contentType: 'application/json',
    //         success: function(res) {
    //           console.log('res',res);
    //         }.bind(this),
    //         error: function(xhr, status, err) {
    //           console.log('xhr',xhr);
    //           console.log('satutus',status);
    //           console.log('err',err);
    //         }.bind(this)
    //       });

    $.post('http://localhost:3000',formdata,function(response){
      console.log('response',response);
    })
  }

   render() {
        return (

          <div className="col-md-12">
              <label htmlFor="inputEmail" className="sr-only">Email address</label>
              <input type="text" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
              <div className="checkbox">
                <label>
                  <input type="checkbox" defaultValue="remember-me" /> Remember me
                </label>
              </div>
              <button className="btn btn-primary btn-block" onClick = {this.signIn}>Sign in</button>
          </div>
        );
   }


}



export default App;
