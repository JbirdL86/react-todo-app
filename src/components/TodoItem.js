/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  render() {
    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <button
          type="button"
          onClick={() => this.props.delTodoProps(this.props.todo.id)}
        >
          Delete
        </button>
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
