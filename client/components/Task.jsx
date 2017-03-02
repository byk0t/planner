import React from 'react';
import { Link } from 'react-router';
import {Button} from 'react-bootstrap';
import './Task.less';


class Task extends React.Component {

  render() {
    return (      
      <li>       	 
      	 <Link 
      	 	to={"/task/" + this.props.id}>{this.props.title}</Link>      	 
         <Button bsStyle="danger" onClick={this.props.onDelete}>Delete</Button>
      </li>      
    );
  }
}

export default Task;