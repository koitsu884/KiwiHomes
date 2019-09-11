import axios from 'axios';

import { MANAGE_CLEAR_PROPERTY, MANAGE_SET_PROPERTY, MANAGE_SET_PROPERTIES, MANAGE_DELETE_PROPERTY } from './types';

const keys = require('../config/keys');
const apiBaseURL = keys.apiURL;

export const manageClearProperty = () => {
    return {
        type: MANAGE_CLEAR_PROPERTY
    }
}

export const manageSetProperty = (propertyDetails) => {
    return {
        type: MANAGE_SET_PROPERTY,
        payload: propertyDetails
    }
}

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

export const getProperty = id => dispatch => {
    axios.get(`/property/properties/${id}`, { baseURL: apiBaseURL })
        .then(response => {
            dispatch(manageSetProperty(response.data))
        })
        .catch(error => {
            console.log(error)
        })
}

export const getProperties = () => dispatch => {
    axios.get('/property/properties/', { baseURL: apiBaseURL })
        .then(response => {
            console.log(response.data);
            dispatch(manageSetProperties(response.data));
        })
        .catch(error => {
            console.log(error);
        })
}

export const deleteProperty = id => dispatch => {
    axios.delete(`/property/properties/${id}/`, { baseURL: apiBaseURL })
        .then(response => {
            console.log(response.data);
            dispatch(manageDeleteProperty(id));
        })
        .catch(error => {
            console.log(error)
        })
}