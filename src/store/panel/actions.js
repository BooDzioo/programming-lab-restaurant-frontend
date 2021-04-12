import PANEL from './actionTypes';
import api from '../../utils/api/api';
import { logoutUser } from '../auth/actions';

const addUserStarted = () => {
  return {
    type: PANEL.ADD_USER_STARTED,
  };
};

const addUserFailed = (err) => {
  return {
    type: PANEL.ADD_USER_FAILED,
    payload: {
      error: err,
    },
  };
};

const addUserSucceeded = () => {
  return {
    type: PANEL.ADD_USER_SUCCEEDED,
  };
};

export const addUser = (name, surname, email, password, accountType) => {
  return async (dispatch) => {
    dispatch(addUserStarted());
    try {
      const response = await api.addUser(name, surname, email, password, accountType);
      dispatch(addUserSucceeded());
    } catch (err) {
      if (err.response.status === 401 && err.response.data.message === 'Auth token expired') {
        dispatch(logoutUser());
      } else {
        dispatch(addUserFailed(err.response.data));
      }
    }
  };
};
export const clearAddUserErrorMessage = () => {
  return {
    type: PANEL.ADD_USER_CLEAR_ERROR_MESSAGE,
  };
};

const getAllUsersStarted = () => {
  return {
    type: PANEL.GET_ALL_USERS_STARTED,
  };
};

const getAllUsersFailed = (err) => {
  return {
    type: PANEL.GET_ALL_USERS_FAILED,
    payload: {
      error: err,
    },
  };
};

const getAllUsersSucceeded = (users) => {
  return {
    type: PANEL.GET_ALL_USERS_SUCCEEDED,
    payload: {
      users: users,
    },
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    dispatch(getAllUsersStarted());
    try {
      const response = await api.getAllUsers();
      dispatch(getAllUsersSucceeded(response));
    } catch (err) {
      if (err.response.status === 401 && err.response.data.message === 'Auth token expired') {
        dispatch(logoutUser());
      } else {
        dispatch(getAllUsersFailed(err.response.data));
      }
    }
  };
};

export const clearGetAllUsersErrorMessage = () => {
  return {
    type: PANEL.GET_ALL_USERS_CLEAR_ERROR_MESSAGE,
  };
};

const deleteUserStarted = () => {
  return {
    type: PANEL.DELETE_USER_STARTED,
  };
};

const deleteUserFailed = (err) => {
  return {
    type: PANEL.DELETE_USER_FAILED,
    payload: {
      error: err,
    },
  };
};

const deleteUserSucceeded = () => {
  return {
    type: PANEL.DELETE_USER_SUCCEEDED,
  };
};

export const deleteUser = (requestedUser) => {
  return async (dispatch) => {
    dispatch(deleteUserStarted());
    try {
      const response = await api.deleteUser(requestedUser);
      dispatch(deleteUserSucceeded());
    } catch (err) {
      if (err.response?.status === 401 && err.response.data.message === 'Auth token expired') {
        dispatch(logoutUser());
      } else {
        dispatch(deleteUserFailed(err.response.data));
      }
    }
  };
};
