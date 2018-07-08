// Need to import the API
import  API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL';
export const DELETE_GOAL = 'DELETE_GOAL';

addGoal = (goal) => {
    return {
        type: ADD_GOAL,
        goal
    }
}

deleteGoal = (goal) => {
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
          dispatch(handleAddGoal(goal.name));
      })
    }
}

export function handleAddGoal(name) {
    const newId = appStore.generateId();
    return (dispatch) => {
        const addResult = dispatch(addGoal({
            id: newId,
            name: name,
            complete: false
        }))
        return API.saveTodo(addResult.goal.name).catch(() =>{
          alert('Problem Saving todo: ' + addResult.goal.name +  ' - please try again in a moment');
          dispatch(handleDeleteGoal(addResult.goal));
      })
    }

}