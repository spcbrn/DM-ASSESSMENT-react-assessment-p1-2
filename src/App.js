import React, { Component } from 'react';
import logo from './logo.svg';
import List from './components/List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state ={
      userInput: '',
      taskList: []
    }

  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleNewTask = this.handleNewTask.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      userInput: e.target.value
    })
  }

  handleNewTask() {
    if(this.state.userInput) {
      var newList = this.state.taskList;
      newList.push(this.state.userInput);
      this.setState({
          taskList: newList,
          userInput: ''
      })
    }
  }

  render() {
    // console.log(this.state.taskList)

    const tasksList = this.state.taskList.map( (item, idx) => {
      return(
        <List task={item} key={idx}/>
      )
    })

    // console.log(tasksList)

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Make a to-do list!</h2>
        </div>
        {tasksList}
        <input className="inputField" placeholder='add a new task' onChange={this.handleInputChange} value={this.state.userInput}/>
        <button className="submitTask" onClick={this.handleNewTask}>Submit Task</button>

      </div>
    );
  }
}

export default App;
