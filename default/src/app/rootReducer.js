import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from 'slices/loginSlice';
import menuReducer from 'slices/menuSlice';
import modalReducer from 'slices/modalSlice';

const rootReducer = combineReducers({
    login: loginReducer,
    menu: menuReducer,
    modal: modalReducer
});

export default rootReducer;
