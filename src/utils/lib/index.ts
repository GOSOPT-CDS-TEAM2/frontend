import axios, { AxiosInstance } from 'axios';

const client: AxiosInstance = axios.create({ baseURL: process.env.REACT_APP_API });

export default client;
