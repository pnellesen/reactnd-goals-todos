import {
    ADD_GOAL,
    DELETE_GOAL
 }  from '../actions/goals'

 import { FETCH_DATA } from '../actions/shared'

export default function goals (state=[], action) {
    switch (action.type) {
        case ADD_GOAL:
            return state.concat([action.goal]);
        case DELETE_GOAL:
            return state.filter((goal) => (goal.id !== action.goal.id));
        case FETCH_DATA:
            return action.goals;
        default:
            return state
    }
}