import React, { Componet, PropTypes } from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

class TodoItem extends Componet {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }
  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }
  handleDoubleClick() {
    this.setState({ editing: true })
  }

  render() {
      const { todo, completeTodo, deleteTodo } = this.props

      let elment

    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                editing={this.state.editing}
                onSave={(text)=>this.handleSave(todo.id,text)}
                />
      )
    } else {
      element = (
        <div className="view">
                    <input className='toggle'
                    checked={todo.completed}
                    type="checkbox" 
                    onChange={()=>completeTodo(todo.id)}
                    />
                    <lable onDoubleClick={this.handleDoubleClick.bind(this)}>{todo.text}</lable>
                    <button className="destory" 
                        onClick={()=>{deleteTodo(todo.id)}}
                    />
                </div>
      )
    }

  return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}
TodoItem.PropTypes = {
  todo: PropTypes.object,
  completeTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func
}

export default TodoItem

