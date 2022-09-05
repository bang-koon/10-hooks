import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "toDos",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDoSlice.actions;
export default toDoSlice.reducer;

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
// });

// redux-toolkit은 immer가 있기에 실행되서 mutate 가능
// 뒤에서 return [{ text: action.payload, id: Date.now()}, ...state] 가 리턴됨
// => mutate the state or return new state
