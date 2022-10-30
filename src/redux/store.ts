import { configureStore } from '@reduxjs/toolkit'
import TaskManagerSlice from "./Slices/TaskManagerSlice";

export const store = configureStore({
    reducer: {
        TaskManagerSlice: TaskManagerSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch