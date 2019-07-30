import history from '../history';

import {SEARCH_PROPERTIES, SET_PROPERTIES} from './types';

const properties = [
    {
        _id: 1,
        title: "Church house",
        imageUrl: require("../images/houses/house.jpg"),
        region: "Canterbury",
        city: "Christchurch",
        suburb: "Hornby",
        rooms: 3,
        price: 500000
    },
    {
        _id: 2,
        title: "Auckland Apartment",
        imageUrl: require("../images/houses/apartment1.jpg"),
        region: "Auckland",
        city: "Auckland City",
        suburb: "Avondale",
        rooms: 2,
        price: 1300000
    },
    {
        _id: 3,
        title: "Welly house",
        imageUrl: require("../images/houses/house2.jpg"),
        region: "Wellington",
        city: "Lower Hutt City",
        suburb: "Belmont",
        rooms: 4,
        price: 900000
    },
    {
        _id: 4,
        title: "Something funcy",
        imageUrl: require("../images/houses/apartment2.jpg"),
        region: "Wellington",
        city: "Upper Hutt City",
        suburb: "Belmont",
        rooms: 3,
        price: 1000000
    },
    {
        _id: 5,
        title: "Title 5",
        imageUrl: require("../images/houses/unit.jpg"),
        region: "Canterbury",
        city: "Christchurch",
        suburb: "Hornby",
        rooms: 3,
        price: 1000000
    },
    {
        _id: 6,
        title: "Title 6",
        imageUrl: require("../images/houses/house3.jpg"),
        region: "Wellington",
        city: "Lower Hutt City",
        suburb: "Belmont",
        rooms: 3,
        price: 1000000
    },
    {
        _id: 7,
        title: "Title 1",
        imageUrl: require("../images/houses/unit2.jpg"),
        region: "Wellington",
        city: "Lower Hutt City",
        suburb: "Belmont",
        rooms: 3,
        price: 1000000
    },
    {
        _id: 8,
        title: "Title 8",
        imageUrl: require("../images/houses/house.jpg"),
        region: "Auckland",
        city: "Auckland",
        suburb: "Mt Albert",
        rooms: 3,
        price: 1000000
    }
]

export const searchProperties = (filters) => dispatch => {
    /* --- Search logic here ---*/
    let results = filters ? properties.filter(property => {
            if(filters.region !== "" && filters.region !== property.region) return false;
            if(filters.city !== "" && filters.city !== property.city) return false;
            if(filters.suburb !== "" && filters.suburb !== property.suburb) return false;

            return true;
        }   
    ) : properties;
    
    dispatch({
        type: SET_PROPERTIES,
        payload: results
    });
}
