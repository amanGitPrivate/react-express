import dispatcher from '../Dispatcher/Dispatcher.js'

export function createTodo(name,Occupation){
	dispatcher.dispatch({
		type:"CREATE",
		name:name,
		Occupation:Occupation
	})
}