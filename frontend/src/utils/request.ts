import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'http://localhost:8080';

export const requestBackend = (config: AxiosRequestConfig) => {
    return axios({ ...config, baseURL: BASE_URL });
};
