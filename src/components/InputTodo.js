/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class InputTodo extends Component {
  state = {
    title: '',
  };

  render() {
    return (
      <form>
        <input 
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
      />
        <button type="button">Submit</button>
      </form>
    );
  }
}
export default InputTodo;