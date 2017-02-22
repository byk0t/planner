import React from 'react';
import ReactDOM from 'react-dom';

import api from '../api';
import TasksStore from '../stores/TasksStore';
import TasksActions from '../actions/TasksActions';

import './App.less';
import TaskList from './TaskList.jsx';


function getStateFromFlux() {
    return {
        isLoading: TasksStore.isLoading(),
        tasks: TasksStore.getTasks()
    };
}

class App extends React.Component {

	constructor(props) {
	    super(props);	    
        this.state = getStateFromFlux();
        this._onChange = this._onChange.bind(this);
  	}

    render() {    	
        return (
            <div className="App">
                <h1>Tasks:</h1>
                <a href="">Add new task</a>
                <TaskList items={this.state.tasks} onTaskDelete={this.handleTaskDelete}/>
            </div>
        );
    }

    handleTaskDelete(task) {
        TasksActions.deleteTask(task.id);
    }

    componentWillMount() {
        TasksActions.loadTasks();    
    }

    componentDidMount() {    
        TasksStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        TasksStore.removeChangeListener(this._onChange);
    }  

    _onChange() {           
        this.setState(getStateFromFlux());        
    }
};

export default App;