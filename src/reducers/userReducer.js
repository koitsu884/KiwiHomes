import { SET_CURRENT_USER} from '../actions/types';

const INITIAL_STATE = {
    user: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isSignedIn: true,
                user: action.payload
            }
        default:
            return state;
    }
};