import axios from 'axios';

const TIMEOUT = 1000000;
const setupAxiosInterceptors = () => {
  const onRequestSuccess = config => {
    config.timeout = TIMEOUT;
    return config;
  };
  const onResponseSuccess = response => {
    const status = response.status || response.response.status;
    return { ...response, status };
  };
  const onResponseError = err => {
    const status = err.status || err.response.status;
    return Promise.reject({...err, status});
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
