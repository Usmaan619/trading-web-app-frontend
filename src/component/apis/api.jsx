import axios from "axios";
import { API_URL } from "../environments/environment";
import axiosInstance from "../interceptors/axios.interceptors";

export const LOGIN_API = async (payload) => {
  try {
    const response = await axios.post(`${API_URL?.baseUrl}login`, payload);
    return response;
  } catch (error) {
    throw error?.response;
  }
};

export const SINGUP_API = async (payload) => {
  try {
    const response = await axios.post(
      `${API_URL?.baseUrl}user/sign_up`,
      payload
    );
    return response?.data;
  } catch (error) {
    throw error?.response;
  }
};

export const GET_INDEXES_API = async () => {
  try {
    const response = await axiosInstance.get(
      `${API_URL?.baseUrl}market/getIndexes`
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const GET_TOTAL_USER_COUNT_API = async () => {
  try {
    const response = await axiosInstance.get(
      `${API_URL?.baseUrl}user/totalUserData`
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const GET_USER_ALL_API = async () => {
  try {
    const response = await axiosInstance.get(
      `${API_URL?.baseUrl}user/getAllUser`
    );
    return response?.data?.users;
  } catch (error) {
    throw error;
  }
};

export const FORGOT_PASSWORD_API = async (payload) => {
  try {
    const response = await axios.post(
      `${API_URL?.baseUrl}user/reset-password`,
      payload
    );
    return response?.data;
  } catch (error) {
    throw error?.response;
  }
};

export const GET_INDEXES_BY_ID_API = async (symbol) => {
  try {
    const response = await axiosInstance.get(
      `${API_URL?.baseUrl}market/getBySymbolIndex?symbol=${symbol}`
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};
