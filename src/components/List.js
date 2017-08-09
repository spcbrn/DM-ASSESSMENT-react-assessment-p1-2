import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeTask, deleteTask} from './../ducks/mainReducer';




class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            completed: false,
            removed: false
        }

        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleComplete() {
        this.props.completeTask({
            task: this.props.task,
            id: this.props.id
        })
        this.setState({
            completed: true
        })
    }

    handleDelete() {
        this.setState({
            removed: true
        })
        this.props.deleteTask(this.props.id);
    }

    render() {

        const styleComp = {
            textDecoration: 'line-through'
        }

        const styleCompButton = {
            display: 'none'
        }

        return(
            <div className="taskDisplay" style={this.state.removed ? styleCompButton : null}>
                <p className="inlineTask" style={this.state.completed ? styleComp : null}>{this.props.task}</p>
                <p className="completeTask" onClick={this.handleComplete} style={this.state.completed ? styleCompButton : null}>COMPLETED</p>
                <p className="deleteTask" onClick={this.handleDelete}>REMOVE</p>
            </div>
        )
    }
}


export default connect(null, {completeTask, deleteTask})(List)