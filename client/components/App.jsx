import React from 'react';
import ReactDOM from 'react-dom';

import api from '../api';
import TasksStore from '../stores/TasksStore';
import TasksActions from '../actions/TasksActions';

import './App.less';


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
                <TaskList items={this.state.tasks}/>
            </div>
        );
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

class TaskList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default App;