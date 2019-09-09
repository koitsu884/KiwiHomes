import axios from 'axios';
import history from '../history';
import { SEARCH_PROPERTIES, SET_PROPERTIES, SET_PROPERTY_DETAILS } from './types';

const keys = require('../config/keys');
const apiBaseURL = keys.apiURL;


// const properties = [
//     {
//         _id: 1,
//         title: "Church house",
//         imageUrl: require("../images/houses/house.jpg"),
//         region: "Canterbury",
//         city: "Christchurch",
//         suburb: "Hornby",
//         type: 'house',
//         rooms: 5,
//         price: 500000
//     },
//     {
//         _id: 2,
//         title: "Auckland Apartment",
//         imageUrl: require("../images/houses/apartment1.jpg"),
//         region: "Auckland",
//         city: "Auckland City",
//         suburb: "Avondale",
//         type: 'apartment',
//         rooms: 2,
//         price: 1300000
//     },
//     {
//         _id: 3,
//         title: "Welly house",
//         imageUrl: require("../images/houses/house2.jpg"),
//         region: "Wellington",
//         city: "Lower Hutt City",
//         suburb: "Belmont",
//         type: 'house',
//         rooms: 4,
//         price: 900000
//     },
//     {
//         _id: 4,
//         title: "Something funcy",
//         imageUrl: require("../images/houses/apartment2.jpg"),
//         region: "Wellington",
//         city: "Upper Hutt City",
//         suburb: "Belmont",
//         type: 'apartment',
//         rooms: 1,
//         price: 500000
//     },
//     {
//         _id: 5,
//         title: "Title 5",
//         imageUrl: require("../images/houses/unit.jpg"),
//         region: "Canterbury",
//         city: "Christchurch",
//         suburb: "Hornby",
//         type: 'unit',
//         rooms: 3,
//         price: 350000
//     },
//     {
//         _id: 6,
//         title: "Title 6",
//         imageUrl: require("../images/houses/house3.jpg"),
//         region: "Wellington",
//         city: "Lower Hutt City",
//         suburb: "Belmont",
//         type: 'house',
//         rooms: 2,
//         price: 290000
//     },
//     {
//         _id: 7,
//         title: "Title 1",
//         imageUrl: require("../images/houses/unit2.jpg"),
//         region: "Wellington",
//         city: "Lower Hutt City",
//         suburb: "Belmont",
//         type: 'unit',
//         rooms: 3,
//         price: 400000
//     },
//     {
//         _id: 8,
//         title: "Title 8",
//         imageUrl: require("../images/houses/house.jpg"),
//         region: "Auckland",
//         city: "Auckland",
//         suburb: "Mt Albert",
//         type: 'house',
//         rooms: 3,
//         price: 600000
//     }
// ]

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
    /* --- Search logic here ---*/
    // let results = filters ? properties.filter(property => {
    //         if(filters.region !== "" && filters.region !== property.region) return false;
    //         if(filters.city !== "" && filters.city !== property.city) return false;
    //         if(filters.suburb !== "" && filters.suburb !== property.suburb) return false;
    //         if(filters.type !== "" && filters.type !== property.type) return false;
    //         if(filters.status !== "" && filters.status !== property.status) return false;
    //         if(filters.priceFrom !== "" && property.price < filters.priceFrom) return false;
    //         if(filters.priceTo !== "" && filters.priceTo < property.price) return false;
    //         if(filters.roomsFrom !== "" && property.rooms < filters.roomsFrom) return false;
    //         if(filters.roomsTo !== "" && filters.roomsTo < property.rooms) return false;

    //         return true;
    //     }   
    // ) : properties;

    // dispatch({
    //     type: SET_PROPERTIES,
    //     payload: results
    // });
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
    // let result = properties.filter(property => property._id == id);

    // if(result){
    //     dispatch({
    //         type: SET_PROPERTY_DETAILS,
    //         payload: result[0]
    //     })
    // }
}
