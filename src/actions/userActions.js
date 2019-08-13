import {SIGN_IN, SIGN_OUT} from './types';
import history from '../history';
import axios from 'axios';

export const signIn = (formData) => dispatch => {
    /* Server validation here (will use axios)*/
    /* For now, always success*/
    let token="test";
    let user={
        _id: 1,
        name: "Test user"
    };

    dispatch({
        type: SIGN_IN,
        payload: {token: token, user: user}
    });

    history.push("/");
}

export const signUp = (formData) => dispatch => {
    /* Server validation here (will use axios)*/
    /* For now, always success*/
    let token="test";
    let user={
        _id: 1,
        name: formData.name
    };

    dispatch({
        type: SIGN_IN,
        payload: {token: token, user: user}
    });

    // axios.post('/users/', formData, {
    //     baseURL: 'http://127.0.0.1:8000/api/'
    // })
    // .then(response => {
    //     let token='test';
    //     dispatch({
    //         type: SIGN_IN,
    //         payload: {token: token, user: response.data}
    //     });
    // })
    // .catch(errors => {
    //     console.log(errors);
    // })

    history.push("/");
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}
