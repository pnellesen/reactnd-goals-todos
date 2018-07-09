import React from 'react';
import {connect} from 'react-redux';
import NewConnectedLoader from './Loader'
import NewConnectedTodos from './Todos'
import NewConnectedGoals from './Goals'

import {handleApiFetch} from '../actions/shared'

class App extends React.Component {
  componentDidMount() {
      const { todos, goals, dispatch } = this.props;
      dispatch(handleApiFetch(todos, goals));
  }

  render() {
      return (
          <div>
              <h1>New React/Redux app</h1>
              <NewConnectedLoader/>
              <NewConnectedTodos/>
              <NewConnectedGoals/>
          </div>
      )
  }
}

export default connect((state) => ({

}))(App);
