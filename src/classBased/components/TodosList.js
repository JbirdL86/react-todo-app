/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TodoItems from './TodoItem';

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItems
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            delTodoProps={this.props.delTodoProps}
            setUpdate={this.props.setUpdate}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
