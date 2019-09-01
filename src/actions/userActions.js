import {SIGN_IN, SIGN_OUT, SET_ERRORS, CLEAR_ERRORS} from './types';
import history from '../history';
import axios from 'axios';
import { toast } from 'react-toastify';

const apiBaseURL = 'http://127.0.0.1:8000/api/';

export const signIn = (email, password) => dispatch => {
    /* Server validation here (will use axios)*/
    /* For now, always success*/
    // let token="test";
    // let user={
    //     _id: 1,
    //     name: "Test user"
    // };

    // dispatch({
    //     type: SIGN_IN,
    //     payload: {token: token, user: user}
    // });

    axios.post('user/token/', {email: email, password:password}, {
        baseURL: apiBaseURL
    })
    .then(response => {
        let token = response.data.token;
        axios.get('user/me/', {
            baseURL: apiBaseURL,
            headers: {Authorization: 'Token ' + token}
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
    /* Server validation here (will use axios)*/
    /* For now, always success*/
    // let token="test";
    // let user={
    //     _id: 1,
    //     name: formData.name
    // };

    // dispatch({
    //     type: SIGN_IN,
    //     payload: {token: token, user: user}
    // });

    axios.post('user/create/', formData, {
        baseURL: 'http://127.0.0.1:8000/api/'
    })
    .then(response => {
        dispatch(signIn(formData.email, formData.password));
        // dispatch({
        //     type: CLEAR_ERRORS
        // })
        // history.push("/");
    })
    .catch(errors => {
        dispatch({
            type: SET_ERRORS,
            payload: errors.response.data
        })
    })
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}
