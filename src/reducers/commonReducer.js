import { SET_REGIONS, SET_CITIES, SET_SUBURBS } from '../actions/types';

const INITIAL_STATE = {
    regions: [],
    cities: [],
    suburbs: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_REGIONS:
            return {
                ...state,
                regions: action.payload
            }
        case SET_CITIES:
            return {
                ...state,
                cities: action.payload
            }
        case SET_SUBURBS:
            return {
                ...state,
                suburbs: action.payload
            }
        default:
            return state;
    }
}