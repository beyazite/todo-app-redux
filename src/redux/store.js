import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo-slice/todoSlice";

export default configureStore({
    reducer: {
        todos: todoSlice,
    }
})