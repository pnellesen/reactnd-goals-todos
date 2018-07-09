// Need to import the API
import  API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL';
export const DELETE_GOAL = 'DELETE_GOAL';

const addGoal = (goal) => {
    return {
        type: ADD_GOAL,
        goal
    }
}

const deleteGoal = (goal) => {
    return {
        type: DELETE_GOAL,
        goal
    }
};

export function handleDeleteGoal(goal) {
    return (dispatch) => {
      dispatch(deleteGoal(goal));// dispatch our App delete action here
      return   API.deleteGoal(goal.id).catch(() => {// this will do the asynchronous API delete action.
          alert('Problem deleting todo - please try again in a moment');
          dispatch(addGoal(goal));
      })
    }
}

export function handleAddGoal(name, cb) {
    return (dispatch) => {
        return API.saveGoal(name).then((goal) => {
            dispatch(addGoal(goal))
            cb()
        }).catch((goal) => {
            alert('Problem Saving goal: ' + goal.name +  ' - please try again in a moment');
            dispatch(deleteGoal(goal));
        })

    }

}