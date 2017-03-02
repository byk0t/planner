import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

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
        this.handleNewTaskRedirect = this.handleNewTaskRedirect.bind(this);
  	}      

    render() {    	
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                      <Navbar.Brand>
                        <a href="#">Planner</a>
                      </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                      <NavItem eventKey={1} href="#">About</NavItem>                      
                      <NavDropdown eventKey={2} title="Actions" id="basic-nav-dropdown">
                        <MenuItem eventKey={2.1} onSelect={this.handleNewTaskRedirect}>New Task</MenuItem>                        
                        <MenuItem divider />
                        <MenuItem eventKey={2.2}>Separated link</MenuItem>
                      </NavDropdown>
                    </Nav>
                  </Navbar>
                <Grid>
                    <Row>
                        <Col xs={12} md={3}>
                            <div className="App">
                                <h1>Tasks:</h1>                                               
                                <TaskList items={this.state.tasks}/>
                            </div>
                        </Col>
                        <Col xs={12} md={9}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }

    handleNewTaskRedirect() {
        this.props.router.push('new-task');
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