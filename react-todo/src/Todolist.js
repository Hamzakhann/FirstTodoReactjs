import React, { Component } from 'react';


class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  delFromChild = (ev)=>{
   this.props.remUser(this.props.user.id) 
  }
  updateFromChild = (ev)=>{
  this.props.updUser(this.props.user.name)    

  }

  render() {
    return (
 <div>
   {this.props.user.name}
        <input onClick = {this.delFromChild}  type = 'button' value = 'Delete'/>
        <input onClick = {this.updateFromChild} type = 'button' value = 'Edit'/>
    </div>
    );
  }
}

export default TodoList;
