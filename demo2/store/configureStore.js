import { createStore, compose } from 'redux'
import reducer from '../reducers'
//applyMiddleware来自redux可以包装 store 的 dispatch
////thunk作用是使action创建函数可以返回一个function代替一个action对象
const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState)

  return store
}
