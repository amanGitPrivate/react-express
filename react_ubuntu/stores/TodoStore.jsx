import EventEmitter from "events";
import Dispatcher from '../Dispatcher/Dispatcher.js'

class TodoStore extends EventEmitter {


   constructor(props){
      super(props);
 
         this.todos=[
	        {
	        	name:"Aman",
	        	id:1,
	        	Occupation:"React"
	        },
	        {
	        	name:"Aman Dev",
	        	id:2,
	        	Occupation:"Angular"
	        }
        ]
      
   }

   createTodo(name,Occupation){
   	let date = new Date();
      let id = this.todos[this.todos.length-1].id
   	this.todos.push({
   		name : name,
   		id:++id,
   		Occupation:Occupation
   	});
   	this.emit('change');
   }

   getAll(){
   	return this.todos;
   }

   handleActions(action){
   	switch(action.type){
   		case "CREATE":
   		this.createTodo(action.name,action.Occupation);
   	}
   }
}

const todoStore = new TodoStore;
Dispatcher.register(todoStore.handleActions.bind(todoStore));

//to show dispatcher is working as well
window.dispatcher =  Dispatcher;

//to show dynamic addition;
window.toStore = todoStore;

export default todoStore;
