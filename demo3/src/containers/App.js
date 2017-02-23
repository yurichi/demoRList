import React, { Component ,PropTypes} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/index'
import LeftNav from '../components/LeftNav/LeftNav'
import MianCon from '../components/mianCon/mianCon'

class MianBox extends Component {
  render(){
    const {todos,actions} = this.props
    return (
      <div id="mainBox">
        <LeftNav todos={todos} {...actions} /> 
        <MianCon />
      </div>
    )
  }
}
MianBox.propTypes = {
  todos: PropTypes.array,
  actions: PropTypes.object
}
//将state.counter绑定到props的counter
function mapStateToProps(state) {
  return {
    todos: state.todos,
  }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(MianBox)
