import React from 'react';
import {connect} from 'react-redux';
import List from './List'

import {
    handleAddGoal,
    handleDeleteGoal
 } from '../actions/goals'



class Goals extends React.Component {
    addItem = (evt) => {
        evt.preventDefault();
        const name = this.input.value;
        this.props.dispatch(handleAddGoal(name, () => this.input.value=''));
    }
    removeItem = (goal) => {
        this.props.dispatch(handleDeleteGoal(goal));
    }
    render() {
        return (
            <div>
                <h2>Goal list here</h2>
                <List listItems={this.props.goals} removeItem={this.removeItem}/>
                <input type='text' placeholder='Enter new goal' ref={(input) => this.input = input}/>
                <button onClick={this.addItem}>Add goal</button>
            </div>

        )
    }
}

export default connect((state) => ({
    goals: state.goals
}))(Goals)
