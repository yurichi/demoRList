import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions/todos'


class App extends Component {
  render() {
      const { todos, actions } = this.props
        return (
            <div>
                <Header addTodo={actions.addTodo} />
                <MainSection todos={todos} actions={actions} />
            </div>
            )
    }
}

App.PropTypes = {
  todos: PropTypes.array,
  actions: PropTypes.object
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TodoActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

