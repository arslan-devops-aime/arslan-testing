import axios, { AxiosInstance } from 'axios';
import {
  axiosRequestInterceptor,
  axiosResponseInterceptor,
} from './interceptor';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
});

// add interceptors to instance
const attachInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    axiosRequestInterceptor.onFulfilled,
    axiosRequestInterceptor.onRejected
  );
  instance.interceptors.response.use(
    axiosResponseInterceptor.onFulfilled,
    axiosResponseInterceptor.onRejected
  );
};

attachInterceptors(instance);

export default instance;
