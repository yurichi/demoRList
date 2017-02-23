/*
* @Author: yuri
* @Date:   2017-02-07 17:47:33
* @Last Modified by:   yuri
* @Last Modified time: 2017-02-10 14:27:06
*/

import {combineReducers} from 'redux';
import todos from './todos.js';


const chatReducer = combineReducers({
  todos
})

export default chatReducer;