/*
* @Author: yuri
* @Date:   2017-02-07 15:50:24
* @Last Modified by:   yuri
* @Last Modified time: 2017-02-23 13:28:22
*/


import { createStore,compose } from 'redux'
import reducer from '../reducers/index'

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);  
  return store
}