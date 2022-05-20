import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalOpen: false
    },
    reducers: {
        setOpen: (state) => {
            state.modalOpen = true;
        },
        setClose: (state) => {
            state.modalOpen = false;
        }
    }
});

export const { setOpen, setClose } = modalSlice.actions;

export const modalSelector = (state) => state.modal;

export default modalSlice.reducer;
