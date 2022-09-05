import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import toDosReducer from "./toDoSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    toDos: toDosReducer,
  },
});
