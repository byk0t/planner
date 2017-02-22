import React from 'react';
import './Task.less';

class Task extends React.Component {

  render() {
    return (      
      <li key={this.props.id}>
      	{this.props.title} 
      	 <button onClick={this.props.onDelete} href="">Delete</button>
      </li>      
    );
  }
}

export default Task;