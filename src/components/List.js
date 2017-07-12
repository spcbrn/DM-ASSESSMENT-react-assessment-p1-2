import React, {Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            completed: false,
            display: true
        }

        this.handleComplete = this.handleComplete.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleComplete() {
        this.setState({
            completed: true
        })
    }

    handleDelete() {
        this.setState({
            display: false
        })
    }

    render() {

        const styleComp = {
            textDecoration: 'line-through'
        }

        const styleCompButton = {
            display: 'none'
        }

        return(
            <div className="taskDisplay" style={this.state.display ? null : styleCompButton}>
                <p className="inlineTask" style={this.state.completed ? styleComp : null}>{this.props.task}</p>
                <p className="completeTask" onClick={this.handleComplete} style={this.state.completed ? styleCompButton : null}>COMPLETED</p>
                <p className="deleteTask" onClick={this.handleDelete}>REMOVE</p>
            </div>
        )
    }
}

export default List;