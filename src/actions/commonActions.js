import axios from 'axios';
import keys from '../config/keys';


import {
    SET_CITIES,
    SET_SUBURBS,
    SET_REGIONS
} from './types';

const baseURL = keys.apiURL;

const setCities = cities => {
    return {
        type: SET_CITIES,
        payload: cities
    }
}

const setRegions = regions => {
    return {
        type: SET_REGIONS,
        payload: regions
    }
}

const setSuburbs = suburbs => {
    return {
        type: SET_SUBURBS,
        payload: suburbs
    }
}

export const getRegions = () => dispatch => {
    axios.get('property/regions/', {baseURL:baseURL})
        .then(response => {
            dispatch(setRegions(response.data))
        })
        .catch(error => {
            console.log(error)
        })
}

export const getCities = () => dispatch => {
    axios.get('property/cities/', {baseURL:baseURL})
        .then(response => {
            dispatch(setCities(response.data))
        })
        .catch(error => {
            console.log(error)
        })
}

export const getSuburbs = () => dispatch => {
    axios.get('property/suburbs/', {baseURL:baseURL})
        .then(response => {
            dispatch(setSuburbs(response.data))
        })
        .catch(error => {
            console.log(error)
        })
}