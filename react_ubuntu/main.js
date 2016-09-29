import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Archive from './RouterFiles/Archive.jsx';
import Settings from './RouterFiles/Settings.jsx';
import {Router,Route,IndexRoute} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

// Non Router Examples
// ReactDOM.render(<App/>, document.getElementById('app'));

//Router Examples
ReactDOM.render(<Router>
	  <Route path = "/" component = {App}>
	  	<Route path = "settings" component = {Settings}></Route>
	  	<Route path = "archive" component = {Archive}></Route>	  	
	  </Route>
	</Router>,
	document.getElementById('app'));

// const App = () => (
//   <MuiThemeProvider>
//     <MyAwesomeReactComponent />
//   </MuiThemeProvider>
// );

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );