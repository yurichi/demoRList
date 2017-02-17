import React, { Component, PropTypes } from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component{
    handleSave(text){
        if(text.length!==0){
            this.props.addTodo(text)
        }
    }

    render(){
        return(
            <header className="header">
                <h1>test</h1>
                <TodoTextInput newTodo onSave={this.handleSave.bind(this)} placeholder='输入list' />
            </header>
        )
    }
}
Header.propTypes = {
    addTodo:PropTypes.func
}

export default Header