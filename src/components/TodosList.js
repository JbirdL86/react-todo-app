/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            delTodoProps={this.props.delTodoProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
