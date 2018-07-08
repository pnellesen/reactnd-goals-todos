import checker from './checker'
import logger from './logger'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'


export default applyMiddleware(thunk, checker, logger)

/*
function appStore() {
    Redux.createStore(combineReducers), Redux.applyMiddleware(ReduxThunk.default, checker, logger)
};//Redux is coming from the redux.min.js. ReduxThunk.default does the action type check.

appStore.subscribe(() => {
    const { goals, todos, loaderClass } = appStore.getState();
});

appStore.generateId = () => (Math.random() + 1).toString(36).substring(2,12);

export default appStore()
*/