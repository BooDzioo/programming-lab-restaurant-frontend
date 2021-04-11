import AUTH from './actionTypes';
import api from '../../utils/api/api';
import { setUserId } from '../user/actions';

const userRegistrationStarted = () => {
  return {
    type: AUTH.REGISTER_STARTED,
  };
};

const userRegistrationSucceeded = (token, isAdmin) => {
  return {
    type: AUTH.REGISTER_SUCCEEDED,
    payload: {
      token: token,
      isAdmin: isAdmin,
    },
  };
};

const userRegistrationFailed = (err) => {
  return {
    type: AUTH.REGISTER_FAILED,
    payload: {
      error: err,
    },
  };
};

export const registerUser = (name, surname, email, password) => {
  return async (dispatch) => {
    dispatch(userRegistrationStarted());
    try {
      const response = await api.register(name, surname, email, password);
      dispatch(userRegistrationSucceeded(response.token, response.isAdmin));
      dispatch(setUserId(response.userId));
    } catch (err) {
      dispatch(userRegistrationFailed(err.response.data));
    }
  };
};

const loginStarted = () => {
  return {
    type: AUTH.LOGIN_STARTED,
  };
};

const loginSucceeded = (token, isAdmin) => {
  return {
    type: AUTH.LOGIN_SUCCEEDED,
    payload: {
      token: token,
      isAdmin: isAdmin,
    },
  };
};

const loginFailed = (err) => {
  return {
    type: AUTH.LOGIN_FAILED,
    payload: {
      error: err,
    },
  };
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(loginStarted());
    try {
      const response = await api.login(email, password);
      dispatch(loginSucceeded(response.token, response.isAdmin));
      dispatch(setUserId(response.userId));
    } catch (err) {
      dispatch(loginFailed(err.response.data));
    }
  };
};

export const logoutUser = () => {
  return {
    type: AUTH.LOGOUT,
  };
};
