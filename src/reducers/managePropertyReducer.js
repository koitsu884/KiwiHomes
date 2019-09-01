import { MANAGE_SET_PROPERTIES} from '../actions/types';

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
        default:
            return state;
    }
};