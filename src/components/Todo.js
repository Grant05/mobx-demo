import React, { Component } from 'react'

class Todo extends Component {

  handleClick = () => {
    console.log(this.props.todo)
    this.props.delete(this.props.todo)
  }

  render() {
    return (
      <div>
        <p>{this.props.todo} <i className="fa fa-trash-o" aria-hidden="true" onClick={this.handleClick}/>
        </p>
      </div>

    )
  }
}

export default Todo
