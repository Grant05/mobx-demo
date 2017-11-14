import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Todo from './Todo'

@observer
class TodoList extends Component {

  createNew = (e) => {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value)
      e.target.value = ""
    }
  }

  handleChange = (e) => {
    this.props.store.newTodo = e.target.value
  }

  render() {
    const { todos, newTodo, deleteTodo } = this.props.store
    return (
      <div>
        <input
          type="text"
          value={newTodo}
          onKeyPress={this.createNew}
          onChange={this.handleChange}
        />
        {todos.map((todo, i) => <Todo todo={todo} key={i} delete={deleteTodo}/>)}
      </div>
    )
  }
}

export default TodoList
