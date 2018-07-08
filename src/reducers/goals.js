import {
    ADD_GOAL,
    DELETE_GOAL
 }  from './actions/todos'

 import { FETCH_DATA } from './actions/shared'

export default function goals (state=[], action) {
    switch (action.type) {
        case ADD_GOAL:
            return state.concat([action.goal]);
            break;
        case DELETE_GOAL:
            return state.filter((goal) => (goal.id !== action.goal.id));
            break;
        case FETCH_DATA:
            return action.goals;
            break;
        default:
            return state
    }
}