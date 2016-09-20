import React from 'react';
import Name from './ComponentFolder/Name.jsx';
import Type1 from './ComponentFolder/Type1.jsx';
import Type2 from './ComponentFolder/Type2.jsx';

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

// Hello World Example

   // render() {
   //    return (

   //       <div className = "helloWorld">
   //          Hello World to react!!!
   //       </div>
   //    );
   // }


 // State Example

   // render() {
   //    return (
   //       <div>
   //        <input type = "text" ref = "name" onChange = {this.changeMyName.bind(this)}/>
   //          <div className = "nameDiv">{this.state.name}</div>
   //       </div>
   //    );
   // }

   // Props  Example

      // render() {
      //    return (
      //       <div>
      //          Hello <Name nameProps = {this.state.name} this = {this} changeMyNameFromChild = {this.changeMyNameFromChild}/>
      //       </div>
      //    );
      // }  

   // Forms Example

   //  render() {
   //    return (
   //       <div>
   //          <input type = "text" value = "name"/>
   //             <div></div>
   //          <input type = "textArea" defaultValue = "name"/>
   //              <div></div>
   //          <input type="radio" name="gender" value="male" defaultChecked/> Male
   //              <div></div>
   //          <input type="radio" name="gender" value="female"/> Female
   //              <div></div>
   //          <input type="radio" name="gender" value="other"/> Other
   //              <div></div>x  
   //          <select multiple = {true} className = "selectedItem">
   //             <option>First Name</option>
   //             <option selected>Second Name</option>
   //          </select>    
   //       </div>
   //    );
   // }

   //Router Example

   render() {
      return (
         <div>
            Hello To New Items      in react!!!
            <br/>
            <Link to = "archive" className = "inlineButton">Archive</Link>
            <Link to = "settings" className = "inlineButton">Settings</Link>
            {this.props.children}
         </div>
      );
   }


}



export default App;
