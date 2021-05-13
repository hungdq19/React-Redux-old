import { v4 as uuidv4 } from "uuid";
const initialState = [
  { id: uuidv4(), title: "Cong Viec 1", completed: false },
  { id: uuidv4(), title: "Cong Viec 2", completed: false },
];
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MARK_COMPLETE":
      return state.map((item) => {
        if (item.id === action.payload) item.completed = !item.completed;
        return item;
      });

    case "ADD_TODO":
      let newTodo = [...state];
      newTodo.push(action.payload);
      return newTodo;
    case "DELETE_TODO":
      let newTodo1 = [...state];
      let newtodo2 = newTodo1.filter((todo) => todo.id !== action.payload);
      return newtodo2;

    default:
      return state;
  }
};
