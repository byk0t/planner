import React from 'react';
import { Link } from 'react-router';
import { Button, ListGroupItem } from 'react-bootstrap';
import './Task.less';


class Task extends React.Component {

  render() {
    return (      
      
      <ListGroupItem>
      	<Link to={"/task/" + this.props.id}>{this.props.title}</Link>

      </ListGroupItem>
      
    );
  }
}

export default Task;