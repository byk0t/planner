import React from 'react';
import { hashHistory , Link } from 'react-router';
import {Button} from 'react-bootstrap';

import TasksActions from '../actions/TasksActions';
import TasksStore from '../stores/TasksStore';

class TaskDetails extends React.Component {

    constructor(props) {
    	super(props);
        this.state = {
            task:{}
        }
        this._onChange = this._onChange.bind(this);
        this.handleTaskDelete = this.handleTaskDelete.bind(this);
    }

    handleTaskDelete() {        
        TasksActions.deleteTask(this.state.task.id);
        this.props.router.push('/');                
    }

    componentWillMount() {
        TasksStore.addChangeListener(this._onChange);
    }

    componentDidMount() {        
        TasksActions.loadTask(this.props.params.id);
    }

    componentWillUnmount() {
        TasksStore.removeChangeListener(this._onChange);
    }

    componentWillReceiveProps(nextProps) {       
        if(this.props.params.id != nextProps.params.id) {
            TasksActions.loadTask(nextProps.params.id);
        }
    }

    _onChange() {        
        this.setState({task:TasksStore.getTask()});
    }

    render() {
        return (      
        	<div>          		
              <h1>{this.state.task.id}</h1>	 
              <div>
                  {this.state.task.title} <br/>
                  {this.state.task.text} <br/>
                  <Button bsStyle="danger" onClick={ this.handleTaskDelete}>Delete</Button>
              </div>     	
          </div>
        );
    }
}

export default TaskDetails;