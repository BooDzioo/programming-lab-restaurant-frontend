import AUTH from './actionTypes';
import api from '../../utils/api/api';

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
      error: err.message,
    },
  };
};

export const registerUser = (name, surname, email, password) => {
  return async (dispatch) => {
    dispatch(userRegistrationStarted());
    try {
      const response = await api.register(name, surname, email, password);
      dispatch(userRegistrationSucceeded(response.token));
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

const loginSucceeded = (email, password) => {
  return {
    type: AUTH.LOGIN_SUCCEEDED,
    payload: {
      email: email,
      password: password,
    },
  };
};

const loginFailed = (err) => {
  return {
    type: AUTH.LOGIN_FAILED,
    payload: {
      error: err.message,
    },
  };
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    dispatch(loginStarted());
    try {
      const response = await api.login(email, password);
      dispatch(loginSucceeded(response));
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
