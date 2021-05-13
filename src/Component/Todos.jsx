import React, { useState } from "react";
import { isComplete, deleteTodo } from "../actions/todoAction";
import PropTypes from "prop-types";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  isComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

function Todos({ todos, isComplete, deleteTodo }) {
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? " completed" : ""}>
            {todo.title}
            <input type="checkbox" onChange={() => isComplete(todo.id)} />
            <button onClick={() => deleteTodo(todo.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({
  todos: state.todoReducer,
});

export default connect(mapStateToProps, { isComplete, deleteTodo })(Todos);
