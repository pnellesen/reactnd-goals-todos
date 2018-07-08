import React, { Component } from 'react';
import {connect} from 'react-redux';
import List from './List'

import {
    handleAddToDo,
    handleDeleteTodo,
    handleToggleTodo
 } from '../actions/todos'

class Todos extends React.Component {
    addItem = (evt) => {
        evt.preventDefault();
        const name = this.input.value;
        this.input.value = '';
        this.props.dispatch(handleAddToDo(name));
    }
    removeItem = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo));
    }
    toggleItem = (todo) => {
        this.props.dispatch(handleToggleTodo(todo))
    }

    render() {
        return (
            <div>
                <h2>Todo list here</h2>
                <List listItems={this.props.todos} removeItem={this.removeItem} toggleItem={this.toggleItem}/>
                <input type='text' placeholder='Enter new todo' ref={(input) => this.input = input}/>
                <button onClick={this.addItem}>Add todo</button>
            </div>
        )
    }
}

export default connect((state) => ({
    todos: state.todos

}))(Todos);


