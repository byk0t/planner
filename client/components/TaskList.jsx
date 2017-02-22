import React from 'react';
import './TaskList.less';
import Task from './Task.jsx';

class TaskList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.items.map(item => (          
          <Task 
          	key={item.id} 
          	text={item.text} 
          	title={item.title}
          	onDelete={()=> this.props.onTaskDelete(item)}
      	  />          
        ))}
      </ul>
    );
  }
}

export default TaskList;