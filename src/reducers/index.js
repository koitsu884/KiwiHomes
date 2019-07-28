import {combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import propertyReducer from './propertyReducer';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    user: userReducer,
    property: propertyReducer,
    error: errorReducer
});