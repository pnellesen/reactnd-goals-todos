import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

import { Provider } from 'react-redux'
//import { combineReducers } from './reducers/index'
//import { applyMiddleware } from './middleware/index'

import reducer from './reducers' // same as the 3 lines above? will load index.js in /reducers
import middleware from './middleware' //will load 'index.js' in /middleware

import {createStore} from 'redux'




const appStore = createStore(reducer,middleware)
/*
appStore.subscribe(() => {
    const { goals, todos, loaderClass } = appStore.getState();
});

appStore.generateId = () => (Math.random() + 1).toString(36).substring(2,12);
*/

console.log("appStore created. State: ", appStore.getState());

ReactDOM.render(<Provider store={appStore}><App /></Provider>, document.getElementById('root'))

