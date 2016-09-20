import React from 'react';
import TodoStore from '../stores/TodoStore.jsx';
import * as TodoAction from '../Action/Action.js';

class Settings extends React.Component {

   constructor(props){
      super(props);
      this.state = {

         todos:TodoStore.getAll()
      }
   }

   componentWillMount(){
      TodoStore.on("change",() =>{
         this.setState({
            todos:TodoStore.getAll()
         })
      });
   }


   createTodo(){
      TodoAction.createTodo(this.refs.name.value,this.refs.occupation.value);
   }

   render() {
      return (
         <div>
            {
            this.state.todos.map(function(data,index){
               return(
                  <div className = "oneEntry">
                     <div className = "eachElement">{data.name}</div>
                     <div className = "eachElement">{data.id}</div>
                     <div className = "eachElement">{data.Occupation}</div>
                  </div>
                  );
               })
            }
            <input type = "text" ref = "name" placeholder = "Name"/>
            <br/>
            <input type = "text" ref = "occupation" placeholder = "Occupation"/>
            <br/>
            <div onClick = {this.createTodo.bind(this)} className = "adder"> Click Me and I will add </div>
         </div>
      );
   }
}

export default Settings;
