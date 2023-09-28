import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todoReducer from "./counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  // loadData:{}
});

export default rootReducer;
