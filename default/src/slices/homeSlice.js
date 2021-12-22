import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        home: ""
    },
    reducers: {
        setHome: (state, { payload }) => {
            state.home = payload.home;
        }
    }
});

export const { setHome } = homeSlice.actions;

export const homeSelector = (state) => state.home;

export default homeSlice.reducer;
