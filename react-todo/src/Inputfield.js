import React, { Component } from 'react';


class InputField extends Component {
  constructor(props){
    super(props);
    this.state = {
      task : '',
      mode : 'ADD'

    }
  }

componentWillReceiveProps(nextProps){
if (nextProps.insertUser){
  this.setState({
    mode : 'Update', 
    task : nextProps.insertUser,
  })
}else{
  this.setState({
    mode:'ADD'
  })
}
}


  updateVal = (ev)=>{
    console.log(ev.target.value)
    console.log(ev.target.name)
      this.setState({
        [ev.target.name] : ev.target.value
      })
  }
  



  sendToList = (ev)=>{
    if (this.state.mode === 'ADD'){
      let userId = Math.random();
      this.props.submit({
           id : userId,
          name : this.state.task,
      })
        this.setState({task: ''});
        ev.preventDefault();

    }else{
      let userId = Math.random();
      this.props.submit({
           id : userId,
          name : this.state.task,
      })
      this.changeButton()
      ev.preventDefault()
    }
        }
        changeButton = (ev)=>{
          if(this.state.mode === 'Update'){
            
            this.setState({
              mode: 'ADD',
              task: ''
            })
          }
        }

  render() {
    return (
    <form onSubmit = {this.sendToList} >
        <input type = "text" name = "task" value = {this.state.task} onChange = {this.updateVal}/>
        <input type = 'submit'  value = {this.state.mode} />
    </form>
    );
  }
}

export default InputField;
