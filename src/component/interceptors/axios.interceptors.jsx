import axios from "axios";
import { API_URL } from "../environments/environment";
import { GET_CASHE } from "../utils/helper";

const axiosInstance = axios.create({
  baseURL: API_URL?.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

/* 
Interceptor to add token to request headers
**/
axiosInstance.interceptors.request.use(
  (config) => {
    const token = GET_CASHE("token");
    if (token) config.headers["Authorization"] = `${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // if (response?.data?.message) toastSuccess(response?.data?.message);

    return response;
  },
  (error) => {
    // if (error?.message) toastError(error?.message);

    if (error.response && error.response.status === 401) {
      // For example, log out the user and redirect to login page
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
