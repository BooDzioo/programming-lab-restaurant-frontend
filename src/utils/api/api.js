import axios from 'axios';
import { BASE_API_URL, ENDPOINT } from './constants';
import { HTTP_METHODS } from '../../constants/constants';
import store from '../../store/store';

const handleError = (err) => {
  console.warn('error', err);
};

const apiRequest = async (method, endpoint, body = {}) => {
  const url = BASE_API_URL + endpoint;
  const parsedBody = JSON.stringify(body);
  const token = store.getState().auth.token;
  const response = await axios({
    method: method,
    url: url,
    data: parsedBody,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });
  console.log(response.data);
  return response.data;
};

const register = async (name, surname, email, password) => {
  return await apiRequest(HTTP_METHODS.POST, ENDPOINT.REGISTER, {
    name,
    surname,
    email,
    password,
  });
};

const login = async (email, password) => {
  return await apiRequest(HTTP_METHODS.POST, ENDPOINT.LOGIN, {
    email,
    password,
  });
};

const getUser = async () => {
  const token = store.getState().auth.token;
  const userId = store.getState().user.id;
  return await apiRequest(HTTP_METHODS.POST, ENDPOINT.GET_USER, {
    token,
    userId,
  });
};

const changePassword = async (oldPassword, newPassword) => {
  const token = store.getState().auth.token;
  const { id: userId, email } = store.getState().user;
  return await apiRequest(HTTP_METHODS.POST, ENDPOINT.CHANGE_PASSWORD, {
    token,
    userId,
    email,
    oldPassword,
    newPassword,
  });
};

const getMenu = async () => {
  const userId = store.getState().user.id;
  return await apiRequest(HTTP_METHODS.POST, ENDPOINT.GET_MENU, { userId });
};

const addUser = async (name, surname, email, password, accountType) => {
  const userId = store.getState().user.id;
  return await apiRequest(HTTP_METHODS.POST, ENDPOINT.ADD_USER, {
    userId,
    name,
    surname,
    email,
    password,
    accountType,
  });
};

const getAllUsers = async () => {
  const userId = store.getState().user.id;
  return await apiRequest(HTTP_METHODS.POST, ENDPOINT.GET_ALL_USERS, {
    userId,
  });
};

const refreshToken = async () => {
  const userId = store.getState().user.id;
  return await apiRequest(HTTP_METHODS.POST, ENDPOINT.REFRESH_TOKEN, {
    userId,
  });
};

const deleteUser = async (requestedUser) => {
  const userId = store.getState().user.id;
  return await apiRequest(HTTP_METHODS.POST, ENDPOINT.DELETE_USER, {
    userId,
    requestedUser,
  });
};

const api = {
  register,
  login,
  getUser,
  changePassword,
  getMenu,
  addUser,
  getAllUsers,
  refreshToken,
  deleteUser,
};

export default api;
