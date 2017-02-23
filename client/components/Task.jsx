import React from 'react';
import { Link } from 'react-router';
import './Task.less';

class Task extends React.Component {

  render() {
    return (      
      <li>
      	{this.props.title} 
      	 <Link 
      	 	to={"/task/" + this.props.id}>View Details</Link>
      	 <button onClick={this.props.onDelete} href="">Delete</button>
      </li>      
    );
  }
}

export default Task;