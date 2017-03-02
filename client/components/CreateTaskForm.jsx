import React from 'react';
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
      		<h1>Create New Task</h1>      
	      	<form method="post" action="">
	      		Title: <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} /> <br/>
	      		Text: <textarea name="text" value={this.state.text} onChange={this.handleTextChange}></textarea> <br/>
	      		<button onClick={this.handleTaskCreate}>Create</button>
	      	</form>
      	</div>
    );
  }
}

export default CreateTaskForm;