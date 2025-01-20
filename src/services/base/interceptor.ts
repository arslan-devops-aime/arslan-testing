import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { UserInfoT } from 'src/types/user';

export const axiosRequestInterceptor = {
  onFulfilled: (
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig => {
    const userStr = window.localStorage.getItem('user');

    if (userStr) {
      const user = JSON.parse(userStr) as UserInfoT;
      const token = user.token;

      // add token on headers
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // modify headers
    config.headers['Accept'] = 'application/json';

    return config;
  },
  onRejected: (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
};

export const axiosResponseInterceptor = {
  onFulfilled: (res: AxiosResponse) => res,
  onRejected: (error: AxiosError): Promise<AxiosError> => {
    const response = error.response;
    const responseData: any = response?.data;
    const resMsg = responseData?.message as string;
    let errorMsg = error.message || 'No Message Found';

    if (resMsg) errorMsg = resMsg;

    return Promise.reject({ message: errorMsg });
  },
};
