import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {},
    reducers: {}
});

export const { sample } = modalSlice.actions;

export const modalSelector = (state) => state.modal;

export default modalSlice.reducer;
