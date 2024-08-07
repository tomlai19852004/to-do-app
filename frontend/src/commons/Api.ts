import Axios, { InternalAxiosRequestConfig } from 'axios';

const reqInterceptor = (config: InternalAxiosRequestConfig) => {
    console.log( config.headers );
    if( config.headers ){
        config.headers.Accept = 'application/json';
    }

    config.withCredentials = false;
    return config;
}

export const api = Axios.create({
    baseURL: process.env.REACT_APP_API_BASE
});

api.interceptors.request.use(reqInterceptor);
api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const msg = error.response?.data?.message || error.message;

        return Promise.reject(error);
    }
);