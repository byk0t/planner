import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button, Alert} from 'react-bootstrap';
import TasksActions from '../actions/TasksActions';

class CreateTaskForm extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {title:'', text:''};
  	this.handleTaskCreate = this.handleTaskCreate.bind(this);	
  	this.handleTitleChange = this.handleTitleChange.bind(this);
  	this.handleTextChange = this.handleTextChange.bind(this);    
  }

  handleTaskCreate(e) {
  	e.preventDefault();
  	TasksActions.createTask(this.state);  	
    this.props.router.push('/');
  }

  handleTitleChange(e) {
  	this.setState({title: e.target.value});
  }

  handleTextChange(e) {
  	this.setState({text: e.target.value});
  }

  render() {
    return (      
    	<div>      		
          <Alert bsStyle="info">
            <strong>Create new task</strong>
          </Alert>    
	      	<form method="post" action="">
            <FormGroup
              controlId="taskTitle">
              <ControlLabel>Title:</ControlLabel>
              <FormControl
                type="text"
                value={this.state.title}
                placeholder="Enter text"
                onChange={this.handleTitleChange}
              />
            </FormGroup>
            <FormGroup
              controlId="taskText">
              <ControlLabel>Text:</ControlLabel>
              <FormControl
                type="text"
                componentClass="textarea"
                value={this.state.text}
                placeholder="Enter text"
                onChange={this.handleTextChange}
              />
            </FormGroup>	      
	      		<Button bsStyle="success" onClick={this.handleTaskCreate}>Create</Button>
	      	</form>
      	</div>
    );
  }
}

export default CreateTaskForm;