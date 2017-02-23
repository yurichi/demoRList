/*
* @Author: yuri
* @Date:   2017-02-08 14:08:37
* @Last Modified by:   yuri
* @Last Modified time: 2017-02-23 13:57:19
*/

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';



export default class NavLi extends Component {
   constructor(props, context) {
    super(props, context)
    this.state = {
      editing: false
    }
  }
  render() {
    const {todo} = this.props
    let element;
          element = (
        <div className='view'>
          {todo.text}
        </div>
      );

    return (
      <li className={classnames({
        // completed: todo.marked,
        // editing: this.state.editing
      })}>
        {element}
      </li>
    );
  }
}

NavLi.propTypes = {
  todo:PropTypes.object,
}