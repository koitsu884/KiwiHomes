import {combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import userReducer from './userReducer';
import errorReducer from './errorReducer';
import propertyReducer from './propertyReducer';
import managePropertyReducer from './managePropertyReducer';
import commonReducer from './commonReducer';

export default combineReducers({
    form: formReducer,
    common: commonReducer,
    user: userReducer,
    property: propertyReducer,
    manageProperty: managePropertyReducer,
    errors: errorReducer
});