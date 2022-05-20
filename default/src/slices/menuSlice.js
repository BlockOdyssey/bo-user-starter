import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
    name: 'menu',
    initialState: { menu: '' },
    reducers: {
        setMenu: (state, { payload }) => {
            state.menu = payload.menu;
        }
    }
});

export const { setMenu } = menuSlice.actions;

export const menuSelector = (state) => state.menu;

export default menuSlice.reducer;
