import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constant/TodoFilters'

const FILTER_TITLES = {
  [SHOW_ALL]: '全部',
  [SHOW_ACTIVE]: '正在进行',
  [SHOW_COMPLETED]: '已完成',
}

class Footer extends Component {
  renderTodoCount() {
    const { activeCount } = this.props
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
      <span className="todo-count">
        <strong>{activeCount||'No'} </strong>{itemWord} left
    </span>
    )
  }
  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow } = this.props

    return ( <a className = {
        classnames({
          selected: filter === selectedFilter
        })
      }
      style = {
        { cousor: 'pointer' } }
      onClick = {
        () => onShow(filter) }>
         { title } 
         </a>
    )
  }
  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <button className="clear-completed"
                onClick={onClearCompleted} >
          删除已完成
        </button>
      )
    }
  }
  render() {
    return (
      <footer className="footer">
        {this.renderTodoCount()}
        <ul className="filters">
          {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter=>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    )
  }
}

Footer.propTypes = {
  activeCount: PropTypes.number,
  filter: PropTypes.string,
  onShow: PropTypes.func,
  completedCount: PropTypes.number,
  onClearCompleted: PropTypes.func
}

export default Footer
