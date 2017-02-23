/*
* @Author: yuri
* @Date:   2017-02-09 14:05:16
* @Last Modified by:   yuri
* @Last Modified time: 2017-02-23 13:36:38
*/
import * as types from '../constants/ActionTypes';

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text
  };
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    id
  };
}

export function editTodo(id,text) {
    return {
        type:types.EDIT_TODO,
        id,
        text
    }
}

export function markTodo(id,text) {
    return {
        type:types.MARK_TODO,
        id,
        text
    }
}

export function markAll(){
    return {
        type:types.MARK_ALL,
    }
}

export function clearMarked(){
    return{
        type:types.CLEAR_MARKED,
    }
}
