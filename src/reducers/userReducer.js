import { SIGN_IN, SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
    // token: null,
    // user: null
    token: 'abcde',//For test
    user: {
        displayName: 'test',
        user_type: 'Admin'
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_OUT:
            return { token: null, user:null };
        case SIGN_IN:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
        default:
            return state;
    }
};