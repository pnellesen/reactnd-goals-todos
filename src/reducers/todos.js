// This would be part of our app code. This is the reducer function.
import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO
 }  from './actions/todos'

 import { FETCH_DATA } from './actions/shared'


export default function todos (state=[], action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat([action.todo]);
            break;
        case DELETE_TODO:
            return state.filter((todo) => (todo.id !== action.todo.id));
            break;
        case TOGGLE_TODO:
            return state.map((todo) => todo.id !== action.todo.id ? (todo) : (
                Object.assign({}, todo, {complete: !todo.complete}))
              )
            break;
        case FETCH_DATA:
            return action.todos;
            break;
        default:
            return state
    }
}