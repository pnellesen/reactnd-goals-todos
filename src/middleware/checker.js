import { ADD_TODO } from '../actions/todos'
import { ADD_GOAL } from '../actions/goals'

const checker = (store) => (next) => (action) => {
    // logic from our old checkAndDispatch goes here. Is the logic to
    // control whether or not we run our dispatch function
    if (action.type === ADD_TODO && action.todo.name.toLowerCase().indexOf("bitcoin") >= 0) {
        return alert("Bitcoin not allowed!");
    }

    if (action.type === ADD_GOAL && action.goal.name.toLowerCase().indexOf("bitcoin") >= 0) {
        return alert("Bitcoin not allowed!");
    }

    return next(action)// next is the next reducer in the store.

  }

  export default checker