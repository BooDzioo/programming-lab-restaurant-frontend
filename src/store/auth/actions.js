import AUTH from './actionTypes';
import api from '../../utils/api/api';
import { setUserId } from '../user/actions';

const userRegistrationStarted = () => {
  return {
    type: AUTH.REGISTER_STARTED,
  };
};

const userRegistrationSucceeded = (token) => {
  return {
    type: AUTH.REGISTER_SUCCEEDED,
    payload: {
      token: token,
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
      dispatch(userRegistrationSucceeded(response.token));
      dispatch(setUserId(response.userId));
    } catch (err) {
      if (err.code === 401) {
        dispatch(logoutUser());
      } else {
        dispatch(userRegistrationFailed(err));
      }
    }
  };
};

const loginStarted = () => {
  return {
    type: AUTH.LOGIN_STARTED,
  };
};

const loginSucceeded = (token) => {
  return {
    type: AUTH.LOGIN_SUCCEEDED,
    payload: {
      token,
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
      dispatch(loginSucceeded(response.token));
      dispatch(setUserId(response.userId));
    } catch (err) {
      if (err.code === 401) {
        dispatch(logoutUser());
      } else {
        console.log(err);
        dispatch(loginFailed(err));
      }
    }
  };
};

export const logoutUser = () => {
  return {
    type: AUTH.LOGOUT,
  };
};
