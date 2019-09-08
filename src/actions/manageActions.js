import axios from 'axios';
import history from '../history';

import {MANAGE_SET_PROPERTIES, MANAGE_DELETE_PROPERTY} from './types';

const apiBaseURL = process.env.REACT_APP_API_UR;

export const manageSetProperties = (properties) => {
    return {
        type: MANAGE_SET_PROPERTIES,
        payload: properties
    }
}

export const manageDeleteProperty = (id) => {
    return {
        type: MANAGE_DELETE_PROPERTY,
        payload: id
    }
}

export const getProperties = () => dispatch => {
    axios.get('/property/properties/', {baseURL: apiBaseURL})
        .then(response => {
            console.log(response.data);
            dispatch(manageSetProperties(response.data));
        })
        .catch(error => {
            console.log(error);
        })
}

export const deleteProperty = id => dispatch => {
    axios.delete(`/property/properties/${id}/`, {baseURL: apiBaseURL})
        .then(response => {
            console.log(response.data);
            dispatch(manageDeleteProperty(id));
        })
        .catch(error => {
            console.log(error)
        })
}