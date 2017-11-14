import React, { Component } from 'react'
import TodoList from './components/TodoList'
import store from './store'

class App extends Component {

  render() {
    return (
      <div id="app" style={{'fontFamily': 'Avenir'}}>
        <h1 {{ 'textAlign': 'center'}}>Todos</h1>
        <TodoList store={store}/>
      </div>
    )
  }
}

export default App;
