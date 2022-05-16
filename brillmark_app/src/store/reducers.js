/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';

import popupReducer from "./popup.reducer";

const rootReducer = combineReducers(
    { 
        popupReducer 
    }
);

export default rootReducer;