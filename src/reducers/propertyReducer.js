import { GET_PROPERTY, UPDATE_PROPERTY, DELETE_PROPERTY, ADD_PROPERTY, SEARCH_PROPERTIES, SET_PROPERTIES} from '../actions/types';

const INITIAL_STATE = {
    properties: [],
    filters: {},
    selectedProperty: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PROPERTIES:
            return {
                ...state,
                properties: action.payload
            }
        default:
            return state;
    }
};