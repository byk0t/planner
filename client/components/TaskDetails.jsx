import React from 'react';
import { hashHistory , Link } from 'react-router';
import TasksActions from '../actions/TasksActions';

class TaskDetails extends React.Component {

  constructor(props) {
  	super(props);  	
  }

  render() {
    return (      
    	<div>
      		<Link to="/">All tasks</Link> 
          <h1>{this.props.params.id}</h1>	      	
      </div>
    );
  }
}

export default TaskDetails;