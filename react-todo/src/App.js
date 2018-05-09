import React, { Component } from 'react';
import './App.css';
import InputField from './Inputfield'
import TodoList from './Todolist'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
          users : [],
          upUser : null,
    }
  }
  addUser = (obj)=>{
      let _user = [...this.state.users];
      // _user.push(obj);
      this.setState({
        users : [..._user, obj],
      })
      console.log(this.state.users)
  }


  delUser = (id)=>{
      let _remUser =  this.state.users.filter((user)=>{
  return user.id !== id
})
this.setState({
  users : _remUser,
})
  }

updateUser = (userVal)=>{
  this.setState({
    upUser : userVal,
  })
  console.log(this.state.upUser)
}

  render() {
    return (
      <div className="App">
          <h1>Hello App</h1>
          <InputField insertUser = {this.state.upUser} submit = {this.addUser} />
          {
            this.state.users.map((user)=>{
return(
              <TodoList updUser = {this.updateUser} remUser = {this.delUser} key = {user.id} user = {user}/>   
)     
            })
          }
       
      </div>
    );
  }
}

export default App;
