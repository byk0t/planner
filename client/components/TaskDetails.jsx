import React from 'react';
import { hashHistory , Link } from 'react-router';

import TasksActions from '../actions/TasksActions';
import TasksStore from '../stores/TasksStore';

class TaskDetails extends React.Component {

    constructor(props) {
    	super(props);
        this.state = {
            task:{}
        }
        this._onChange = this._onChange.bind(this);
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
                  {this.state.task.text}
              </div>     	
          </div>
        );
    }
}

export default TaskDetails;