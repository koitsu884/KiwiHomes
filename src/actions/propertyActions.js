import axios from 'axios';
import { SET_PROPERTIES, SET_PROPERTY_DETAILS } from './types';

const keys = require('../config/keys');
const apiBaseURL = keys.apiURL;

export const searchProperties = (filters) => dispatch => {
    console.log(filters);
    axios.get('/property/properties/', {
        baseURL: apiBaseURL,
        params: filters ? {
            region: filters.region,
            city: filters.city,
            suburb: filters.suburb,
            propertyType: filters.propertyType,
            status: filters.status,
            priceFrom: filters.priceFrom,
            priceTo: filters.priceTo,
            priceFrom: filters.priceFrom,
            roomsFrom: filters.roomsFrom,
            roomsTo: filters.roomsTo,
        } : null
    })
        .then(response => {
            console.log(response.data);
            dispatch({
                type: SET_PROPERTIES,
                payload: response.data
            });
        })
        .catch(error => {
            console.log(error);
        })
}

export const getProperty = id => dispatch => {
    axios.get(`/property/properties/${id}`, { baseURL: apiBaseURL })
        .then(response => {
            console.log(response.data);
            dispatch({
                type: SET_PROPERTY_DETAILS,
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
}

