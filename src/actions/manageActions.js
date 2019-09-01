import axios from 'axios';
import history from '../history';

import {MANAGE_SET_PROPERTIES} from './types';

const apiBaseURL = 'http://127.0.0.1:8000/api/';

export const getProperties = () => dispatch => {
    //axios.get('/properties/', {baseURL: apiBaseURL})
}