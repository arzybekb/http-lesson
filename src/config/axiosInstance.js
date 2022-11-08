import axios from "axios";
import { baseURL, JWT_TOKEN_KEY } from "../utils/constants/general";
import store from "../store";
import { removeItemFromStorage } from "../utils/helpers/localStorageHelpers";

const headers = { "Content-Type": "application/json" };

const axiosInstance = axios.create({ baseURL, headers });

axiosInstance.interceptors.request.use((config) => {
  const updatedConfig = { ...config };
  const {
    user: { accessToken },
  } = store.getState();
  if (accessToken)
    updatedConfig.headers.Authorization = `Bearer ${accessToken}`;

  return updatedConfig;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response.status === 401) {
      removeItemFromStorage(JWT_TOKEN_KEY);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
