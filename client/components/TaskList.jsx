import React from 'react';
import {Table, ListGroup, ListGroupItem} from 'react-bootstrap';
import './TaskList.less';
import Task from './Task.jsx';

class TaskList extends React.Component {

  render() {
    return (
      <ListGroup>
        <ListGroupItem header="My Tasks">Click to choose</ListGroupItem>
        {this.props.items.map(item => (          
            <Task 
              key={item.id}
              id={item.id} 
              text={item.text} 
              title={item.title}
              onDelete={()=> this.props.onTaskDelete(item)}
            />          
          ))}
      </ListGroup>
    );
  }
}

export default TaskList;