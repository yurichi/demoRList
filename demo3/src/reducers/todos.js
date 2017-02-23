/*
 * @Author: yuri
 * @Date:   2017-02-09 14:51:36
 * @Last Modified by:   yuri
 * @Last Modified time: 2017-02-23 15:51:57
 */

import { ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_TODO, MARK_ALL, CLEAR_MARKED } from '../constants/ActionTypes';

const todoS = [{
  text: 'list 1',
  marked: false,
  id: 0
}, {
  text: 'list 2',
  marked: true,
  id: 1
}];

export default function todos(state = todoS, action) {
  switch (action.type) {
    case ADD_TODO:
      return [{
        id: (state.length === 0) ? 0 : state.length + 1,
        marked: false,
        text: action.text
      }, ...state];

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      );

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ? {...todo, text: action.text } :
        todo
      );

    case MARK_TODO:
      return state.map(todo =>
        todo.id === action.id ? {...todo, marked: !todo.marked } :
        todo
      );

    case MARK_ALL:
      const areAllMarked = state.every(todo => todo.marked);
      return state.map(todo => ({
        ...todo,
        marked: !areAllMarked
      }));

    case CLEAR_MARKED:
      return state.filter(todo => todo.marked === false);

    default:
      return state;
  }
}
