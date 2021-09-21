/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TodoItems from './TodoItem';

const TodosList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoItems
        key={todo.id}
        todo={todo}
        handleChangeProps={props.handleChangeProps}
        delTodoProps={props.delTodoProps}
        setUpdate={props.setUpdate}
      />
    ))}
  </ul>
);

export default TodosList;
