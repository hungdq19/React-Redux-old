import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoAction";
TodoForm.propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
};

function TodoForm({ addTodo, todos }) {
  const [formdata, setFormdata] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: uuidv4(),
      title: formdata,
      completed: false,
    });
    setFormdata(" ");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formdata}
          onChange={(e) => setFormdata(e.target.value)}
        />
        <input type="submit" value="ADD" />
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  todos: state.todoReducer,
});

export default connect(mapStateToProps, { addTodo })(TodoForm);
