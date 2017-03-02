import React from 'react';
import { Route, Router, hashHistory } from 'react-router';

import App from './App.jsx';
import CreateTaskForm from './CreateTaskForm.jsx';
import TaskDetails from './TaskDetails.jsx';

class Root extends React.Component {
	constructor(props) {    
    	super(props);    
    }

	render() {
		return (
			<Router history={this.props.history}>
		    	<Route path="/" component={App}>
			    	<Route path="/new-task" component={CreateTaskForm}/>
			    	<Route path="/task/:id" component={TaskDetails}/>
		    	</Route>
	  		</Router>
  		);
	}
}

export default Root;