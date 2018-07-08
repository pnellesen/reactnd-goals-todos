import {combineReducers} from 'redux'
import todos from './todos'
import goals from './goals'
import loaderClass from './loaderclass'

export default combineReducers ({
    todos,
    goals,
    loaderClass
})