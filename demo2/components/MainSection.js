import React, {Component,PropTypes} from 'react'
import TodoItem from './TodoItem'
import Footer from './Footer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constant/TodoFilters'

const TODO_FILTERS ={
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends Component{
  constructor(props, context) {
    super(props, context)
    this.state = { filter: SHOW_ALL }
  }
  handleClearCompleted(){
    const atLeastOneCompleted = this.props.todos.some(todo=>todo.completed)
    if(atLeastOneCompleted) {
      this.props.actions.clearCompleted()
    }
  }
  renderToggleAll(completedCount) {
    const {todos,actions} =this.props
    if(todos.lenth > 0) {
      return (
          <input type="checkbox" 
            className="toggle-all"
            checked={completedCount === todos.length}
            onChange={actions.completeAll}
          />
        )
    }
  }
  handleShow(filter){
    this.steState({filter})
  }
  renderFooter(completedCount){
    const {todos} = this.props
    const {filter} = this.state
    const activeCount = todos.length - completedCount
    if(todos.length){
      return (
        <Footer completedCount={completedCount} 
          activeCount = {activeCount}
          fliter = {filter}
          onClearCompleted={this.handleClearCompleted.bind(this)}
          onShow ={this.handleShow.bind(this)}
         />
        )
    }
  }
  render(){
    const { todos, action } = this.props
    const { filter } = this.state
    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return(
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {filteredTodos.map(todo=>
              <TodoItem key={todo.id} todo={todo} {...actions} />
            )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>

      )
  }
}

MainSection.PropTypes = {
  todos:PropTypes.array,
  actions:PropTypes.object
}

export default MainSection