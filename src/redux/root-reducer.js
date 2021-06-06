import { combineReducers } from 'redux';
import desktopReducer from './desktop/desktop.reducer';

export default combineReducers({
    desktop: desktopReducer
})