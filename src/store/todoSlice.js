import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { addDays } from "date-fns";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [
      {
        id: uuidv4(),
        body: "example body",
        isDone: false,
        deadLine: addDays(new Date(), 1),
      },
    ],
    mode: "all",
    amount: 5,
  },
  reducers: {
    createTask(state, action) {
      const { body, deadLine } = action.payload;
      const newTask = {
        id: uuidv4(),
        isDone: false,
        body: body,
        deadLine: deadLine,
      };
      state.tasks.push(newTask);
    },
    deleteTask(state, action) {
      const { id } = action.payload;
      state.tasks = state.tasks.filter((task) => id !== task.id);
    },
    setDoneTask(state, action) {
      const { id } = action.payload;
      state.tasks = state.tasks.filter((task) =>
        id === task.id ? { ...task, isDone: !task.isDone } : task
      );
    },
    setMode(state, action) {
      const { mode } = action.payload;
      state.mode = mode;
    },
    setAmount(state, action) {
      const { amount } = action.payload;
      state.amount = amount;
    },
  },
});

export const { createTask, deleteTask, setDoneTask, setMode } =
  todoSlice.action;
export default todoSlice.reducer;
