import { AUTH_CONSTANT } from './action-types'
import axios from 'axios'

export const login = (payload) => dispatch => {
    return axios.post('/auth/login', payload)
        .then(response => {
            dispatch({type: AUTH_CONSTANT.LOGIN_SUCCESS, ...response})

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.token}`;
        })
}

export const resetState = () => {
    return {
        type: AUTH_CONSTANT.LOGOUT
    }
}

export const me = () => dispatch => {
    return axios.get('/me')
        .then(response => {
            dispatch({type: AUTH_CONSTANT.SET_USER, ...response})
        })
}

export const check = () => dispatch => {
    return dispatch({
        type: AUTH_CONSTANT.AUTH_CHECK,
    })
}
