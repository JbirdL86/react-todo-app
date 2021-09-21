/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class InputTodo extends Component {
  state = {
    title: '',
  };

  onChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button className="input-submit" type="submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
