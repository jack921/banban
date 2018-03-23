'use strict';
import { combineReducers } from 'redux';
import mainReducers from './MainReducer';

const rootReducer=combineReducers({
    mainReducers:mainReducers,
});

export default rootReducer;
