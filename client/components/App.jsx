import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid, Row, Col} from 'react-bootstrap';

import api from '../api';
import TasksStore from '../stores/TasksStore';
import TasksActions from '../actions/TasksActions';

import './App.less';
import TaskList from './TaskList.jsx';

import { Link } from 'react-router';

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
            
            <Grid>
                <Row>
                    <Col xs={12} md={3}>
                        <div className="App">
                            <h1>Tasks:</h1>      
                            <Link to="/new-task">Create New</Link>          
                            <TaskList items={this.state.tasks} onTaskDelete={this.handleTaskDelete}/>
                        </div>
                    </Col>
                    <Col xs={12} md={9}>
                        {this.props.children}
                    </Col>
                </Row>
            </Grid>
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