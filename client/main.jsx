import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Router, hashHistory } from 'react-router';
import App from './components/App.jsx';
import CreateTaskForm from './components/CreateTaskForm.jsx';
import TaskDetails from './components/TaskDetails.jsx';

ReactDOM.render(
	<Router history={hashHistory}>
    	<Route path="/" component={App}/>
    	<Route path="/new-task" component={CreateTaskForm}/>
    	<Route path="/task/:id" component={TaskDetails}/>
  	</Router>, document.getElementById("main"));