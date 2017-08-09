import React, { Component } from 'react';
import logo from './logo.svg';
import List from './components/List';
import './App.css';
import {connect} from 'react-redux';
import {addTask} from './ducks/mainReducer';

class App extends Component {
  constructor(props) {
    super(props)

    this.state ={
      userInput: ''
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
    let ticker = this.props.taskList.length + this.props.completedTasks.length + this.props.deletedTasks.length + 1;
    if(this.state.userInput) {
      let newTask = {
        task: this.state.userInput,
        id: ticker
      };
      this.props.addTask(newTask)
    }
    this.setState({
      userInput: ''
    })
  }

  render() {

    const tasksList = this.props.taskList.map( (item, idx) => {
      return(
        <List task={item.task} key={idx} id={item.id}/>
      )
    })

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

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {addTask})(App);
