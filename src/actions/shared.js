import API from 'goals-todos-api'
export const FETCH_DATA = 'FETCH_DATA'

const fetchData = (todos, goals, loaderClass) => {
    return {
        type: FETCH_DATA,
        todos,
        goals,
        loaderClass
    }
}

export function handleApiFetch(todos, goals) {
    return (dispatch) => {
      return Promise.all([API.fetchTodos(), API.fetchGoals()]).then(function([todos, goals]) {
          dispatch(fetchData(todos, goals));
      })

    }
}