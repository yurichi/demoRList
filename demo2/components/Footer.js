import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constant/TodoFilters'

const FILTER_TITILES = {
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
        <strong>{activeCount||'No'}</strong>{itemWord} left
    </span>
    )
  }
  renderFilterLink(filter) {
    const title = FILTER_TITILES[filter]
    const { filter: selectedFilter, onShow } = this.props

    return ( <a className = {
        classnames({
          seleted: filter === selectedFilter
        })
      }
      style = {
        { cousor: 'pointer' } }
      onClick = {
        () => onShow(filter) }> { title } </a>
    )
  }
  renderClearButton() {
    const { compeletedCount, onClearCompleted } = this.props
    if (compeletedCount > 0) {
      return (
        <button className="clear-completed"
                onClick={onClearCompleted}>
                Clear completed
                </button>
      )
    }
  }
  render() {
    return (
      <footer className="footer">
                {this.renderTodoCount()}
                <ul className="filter">
                {[SHOW_ALL,SHOW_COMPLETED,SHOW_ACTIVE].map(filter=>{
                    <li key={filter}>
                        {this.renderFilterLink(filter)}
                    </li>
                })}
                </ul>
                {this.renderClearButton()}
            </footer>
    )
  }
}

Footer.PropTypes = {
  activeCount: PropTypes.number,
  filter: PropTypes.string,
  onShow: PropTypes.func,
  compeletedCount: PropTypes.number,
  onClearCompleted: PropTypes.number,
}

export default Footer
