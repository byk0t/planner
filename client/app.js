import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

class App extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {tasks: []};	    
  	}

    render() {    	
        return (
            <div>
                <h1>Tasks:</h1>
                <TaskList items={this.state.tasks}/>
            </div>
        );
    }

    componentWillMount() {
    	this.loadTasksFromServer();    
    }

    loadTasksFromServer() {    	
    	let _tasks = [];
        axios.get(`http://localhost:8080/tasks`).then(
        ({ data }) => {
            _tasks = data.map((item)=>{
            	return {
            		'id': item._id,
            		'title': item.title,
            		'text': item.text
            	}
            });        
            this.setState( {'tasks':_tasks} );
        });        
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

ReactDOM.render(<App/>, document.getElementById("app"));