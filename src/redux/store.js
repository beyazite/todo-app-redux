import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo-slice/todoSlice";
import modalSlice from "./todo-slice/modalSlice";

export default configureStore({
    reducer: {
        todos: todoSlice,
        modal: modalSlice
    }
})