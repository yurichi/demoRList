/*
* @Author: yuri
* @Date:   2017-02-07 13:11:46
* @Last Modified by:   yuri
* @Last Modified time: 2017-02-23 16:10:00
*/

import React, { Component ,PropTypes} from 'react';
import NavLi from './NavLi'

class LeftNav extends Component{
    constructor(props, context) {
      super(props, context)
      this.state = {
        text: ''
      }
    }
    handleSubmit(e) {
      const text = e.target.value.trim()
      const { addTodo } = this.props
      if (e.which === 13) {
        if (text.length !== 0) {
          addTodo(text)
          this.setState({ text: '' })
        }
      }
    }

    render(){  
    const { todos } = this.props; 
    return ( 
        <div id="leftNav">
            <input type="text" placeholder='请输入' onKeyDown={this.handleSubmit.bind(this)} />
            <ul>
              {todos.map(todo=>
                <NavLi key={todo.id} todo={todo} />
              )}                
            </ul>
        </div>
    )
  }
}
LeftNav.propTypes = {
  todos: PropTypes.array,
  addTodo: PropTypes.func
}

export default LeftNav