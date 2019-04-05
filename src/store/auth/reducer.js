import { AUTH_CONSTANT } from './action-types'
import { getCurrentUser } from '../../helpers/auth_storage'
import axios from 'axios'

const reducer = (state = getCurrentUser(), action) => {
    switch (action.type) {
        case AUTH_CONSTANT.LOGIN_SUCCESS:
            return login(state, action)
        case AUTH_CONSTANT.AUTH_CHECK:
            return check(state)
        case AUTH_CONSTANT.SET_USER:
            return setUser(state, action)
        case AUTH_CONSTANT.LOGOUT:
            return logout(state)
        default:
            return state
    }
}

function login(state, data) {
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', data.token)

    return {
        ...state,
        logged: true,
        user: data.user,
        token: data.token
    }
}

function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    return {
        logged: false,
        user: {},
        token: null
    }
}

function check(state) {
    if (state.token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;
    }

    return {
        ...state,
        logged: !! state.token
    }
}

function setUser(state, data) {

    return {
        ...state,
        user: data.user,
    }
}

export default reducer