import axios from 'axios'
import { ROOT_URL_API } from './app'
import store from '../store'
import { resetState } from '../store/auth/action'

axios.defaults.baseURL = ROOT_URL_API


axios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        switch (error.response.status) {
            case 401:
                store.dispatch(resetState())
                break;
            default:
        }

        return Promise.reject(error)
    });