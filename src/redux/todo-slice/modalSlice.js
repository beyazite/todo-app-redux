import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: false,
    data: false,
    open: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.name = action.payload.name;
            // state.data = action.payload?.data || false; // data yoksa false olsun
            state.data = action.payload.data;
            state.open = true;
        } ,
        closeModal: state => {
            state.name = false;
            state.data = false;
            state.open = false
        }
    }

})

export const { openModal, closeModal} = modalSlice.actions;

export default modalSlice.reducer;

