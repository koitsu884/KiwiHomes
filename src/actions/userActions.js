import {SIGN_IN, SIGN_OUT, SET_ERRORS} from './types';
import history from '../history';
import axios from 'axios';
import { toast } from 'react-toastify';
import setAuthToken from '../utils/setAuthToken';

const apiBaseURL = process.env.REACT_APP_API_URL;

export const signIn = (email, password) => dispatch => {
    axios.post('user/token/', {email: email, password:password}, {
        baseURL: apiBaseURL
    })
    .then(response => {
        let token = response.data.token;
        setAuthToken(token);
        axios.get('user/me/', {
            baseURL: apiBaseURL
        })
        .then(res => {
            console.log(res.data);
            dispatch({
                type: SIGN_IN,
                payload: {token: token, user:res.data}
            })
            history.push("/");
        })
    })
    .catch(errors => {
        toast.error(errors.response.data.non_field_errors[0]);
    })
}

export const signUp = (formData) => dispatch => {
    axios.post('user/create/', formData, {
        baseURL: apiBaseURL
    })
    .then(response => {
        dispatch(signIn(formData.email, formData.password));
    })
    .catch(errors => {
        dispatch({
            type: SET_ERRORS,
            payload: errors.response.data
        })
    })
}

export const signOut = () => {
    setAuthToken();
    return {
        type: SIGN_OUT
    }
}
