import { SET_PROPERTY_DETAILS, UPDATE_PROPERTY, DELETE_PROPERTY, ADD_PROPERTY, SEARCH_PROPERTIES, SET_PROPERTIES} from '../actions/types';

const INITIAL_STATE = {
    properties: [],
    filters: {},
    propertyDetails: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PROPERTIES:
            return {
                ...state,
                properties: action.payload
            }
        case SET_PROPERTY_DETAILS: 
            return {
                ...state,
                propertyDetails: action.payload
            }
        default:
            return state;
    }
};