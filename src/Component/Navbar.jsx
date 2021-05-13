import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

Navbar.propTypes = {
  todos: PropTypes.array.isRequired,
};

function Navbar({ todos }) {
  return (
    <div className="navbar">
      <h1>My App for Me</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total: {todos.length}</li>
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({
  todos: state.todoReducer,
});
export default connect(mapStateToProps)(Navbar);
