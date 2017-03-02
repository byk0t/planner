import React from 'react';
import { Link } from 'react-router';
import './Task.less';


class Task extends React.Component {

  render() {
    return (      
      <li>       	 
      	 <Link to={"/task/" + this.props.id}>{this.props.title}</Link>      	          	
      </li>      
    );
  }
}

export default Task;