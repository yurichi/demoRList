import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import MianBox from './containers/App'
import './css/index.css'

const store = configureStore()

const rootEl = document.getElementById('root')
render(
  <Provider store={store}>
    <MianBox />
  </Provider>,
  rootEl
)

