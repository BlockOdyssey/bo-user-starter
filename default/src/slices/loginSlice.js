import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {},
    reducers: {}
});

export const { sample } = loginSlice.actions;

export const loginSelector = (state) => state.login;

export default loginSlice.reducer;
