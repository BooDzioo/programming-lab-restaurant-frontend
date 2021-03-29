import axios from 'axios';
import { BASE_API_URL, ENDPOINT } from './constants';
import { HTTP_METHODS } from '../../constants/constants';

const handleError = (err) => {
  console.warn('error', err);
};

const apiRequest = async (method, endpoint, body) => {
  const url = BASE_API_URL + endpoint;
  const parsedBody = JSON.stringify(body);
  const response = await axios({
    method: method,
    url: url,
    data: parsedBody,
  });
  console.log(response);
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

const api = {
  register,
  login,
};

export default api;
