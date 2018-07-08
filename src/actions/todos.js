// Need to import the API
import  API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

// set up functions for our various actions
addToDo = (todo) => {
    return {
        type: ADD_TODO,
        todo
    }
};

deleteToDo = (todo) => {
    return {
        type: DELETE_TODO,
        todo
    }
};

toggleToDo = (todo) => {
    return {
        type: TOGGLE_TODO,
        todo
    }
};

// Combine app and API delete todo code
export function handleDeleteTodo(todo) {
    return (dispatch) => {
      dispatch(deleteToDo(todo));// dispatch our App delete action here
      return   API.deleteTodo(todo.id).catch(() => {// this will do the asynchronous API delete action.
          alert('Problem deleting todo - please try again in a moment');
          //dispatch(addToDo(todo));
          dispatch(handleAddToDo(todo.name));
      })
    }
}

// Combine app and API Add todo code
export function handleAddToDo(name) {
    const newId = appStore.generateId();
    return (dispatch) => {
        const addResult = dispatch(addToDo({
            id: newId,
            name: name,
            complete: false
        }))
        return API.saveTodo(addResult.todo.name).catch(() =>{
          alert('Problem Saving todo: ' + addResult.todo.name +  ' - please try again in a moment');
          dispatch(handleDeleteTodo(addResult.todo));
      })
    }

}

 // Combine app and API toggle todo code
 export function handleToggleTodo(todo) {
    return (dispatch) => {
      dispatch(toggleToDo(todo));
      return API.saveTodoToggle(todo.id).catch(() =>{
          alert('Problem updating todo ' + todo.name + ' - please try again in a moment');
          dispatch(toggleToDo(todo));
      })
    }

}

