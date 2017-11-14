import { observable } from 'mobx'

export class TodoStore {
  @observable todos = ['stuff1', 'stuff2', 'stuff3']
  @observable newTodo = ""

  createTodo(value) {
    this.todos.push(value)
  }

  //observable arrays can't be erased/reassigned to a new object
  //use replace method
  deleteTodo = (value) => {
    console.log(this.todos)
    const newTodos = this.todos.filter((todo) => todo !== value)
    this.todos.replace(newTodos)
  }
}

export default new TodoStore
