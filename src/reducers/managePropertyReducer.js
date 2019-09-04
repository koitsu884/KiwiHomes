import { MANAGE_SET_PROPERTIES, MANAGE_DELETE_PROPERTY} from '../actions/types';

const INITIAL_STATE = {
    properties: [],
    propertyDetails: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MANAGE_SET_PROPERTIES:
            return {
                ...state,
                properties: action.payload
            }
        case MANAGE_DELETE_PROPERTY:
            return {
                ...state,
                properties: state.properties.filter(property => property.id !== action.payload)
            }
        default:
            return state;
    }
};