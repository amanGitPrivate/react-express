import React from 'react';
import Name from './ComponentFolder/Name.jsx';
import Login from './Login.jsx';

import {Link} from 'react-router';

class App extends React.Component {

   // componentDidMount(){
   // 	 alert('Hi');
   // }

   componentWillMount(){
      // comment and uncomment to show the will mount scenario
      // alert('will mount');
       // this.setState({name:"Aman"});
       // alert(this.state.name);
   }

   componentDidMount(){
       // alert(this.state.name);
   }

   componentWillUpdate(){
      // alert('will update');
      // alert(this.state.name)
   }

   componentDidUpdate(){
      // can set state anywhere except render and did update
      // alert(this.state.name);
      // this.setState({});
   }

   constructor(props){
      super(props);
      this.state = {
         name:"Initial Name",
         int:1,
         state2:"aman"
      }
   }

   changeMyName(){
      let name = this.refs.name.value;
      this.setState({name:name});
   }

   changeMyNameFromChild(name,self){
      self.setState({name:name});
   }

   render() {
      return (
         <div>
            Hello Pleae Enter Your User Name!!!
            <br/>
            <Login/>
         </div>
      );
   }


}



export default App;
