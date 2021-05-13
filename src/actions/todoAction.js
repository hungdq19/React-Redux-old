//isComplete là action creater  => action
export const isComplete = (id) => (dispatch) => {
  dispatch({
    type: "MARK_COMPLETE",
    payload: id,
  });
};
export const addTodo = (data) => (dispatch) => {
  dispatch({
    type: "ADD_TODO",
    payload: data,
  });
};
export const deleteTodo = (index) => (dispatch) => {
  dispatch({ type: "DELETE_TODO", payload: index });
};
