import { SIGN_IN, SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
    token: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_OUT:
            return { token: null };
        case SIGN_IN:
            return {
                token: action.payload
            }
        default:
            return state;
    }
};