import { createSlice, Draft } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TaskManagerSlice {
  inputValue: string;
  tasks: { id: number; text: string; completed: boolean }[];
  nowFilter: string;
}

const initialState: TaskManagerSlice = {
  inputValue: "",
  tasks: [],
  nowFilter: 'all'
};

export const TaskManagerSlice = createSlice({
  name: "TaskManagerSlice",
  initialState,
  reducers: {
    changeInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    addTask: (
      state
    ) => {
      if (state.inputValue.length > 0) {
        state.tasks.push({ id: state.tasks.length, text: state.inputValue, completed: false });
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    changeCompleted: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.map((item) => {
        item.completed = item.id === action.payload ? !item.completed : item.completed;
        return item;
      });
    },
    changeFilter: (state, action: PayloadAction<string>) => {
      state.nowFilter = action.payload;
    },
    clearCompleted: (state) => {
      state.tasks = state.tasks.filter(task => !task.completed)
    }
  },
});

export const { changeInputValue, addTask, changeCompleted, deleteTask, changeFilter, clearCompleted } = TaskManagerSlice.actions;
export default TaskManagerSlice.reducer;
