import USER from './actionTypes';
import api from '../../utils/api/api';
import { logoutUser } from '../auth/actions';

const getUserInfoStarted = () => {
  return {
    type: USER.GET_INFO_STARTED,
  };
};

const getUserInfoSucceeded = (user) => {
  return {
    type: USER.GET_INFO_SUCCEEDED,
    payload: {
      user: user,
    },
  };
};

const getUserInfoFailed = (err) => {
  return {
    type: USER.GET_INFO_FAILED,
    payload: {
      error: err,
    },
  };
};

export const getUserInfo = () => {
  return async (dispatch) => {
    dispatch(getUserInfoStarted());
    try {
      const response = await api.getUser();
      dispatch(getUserInfoSucceeded(response));
    } catch (err) {
      if (err.code === 401) {
        dispatch(logoutUser());
      } else {
        console.log(err);
        dispatch(getUserInfoFailed(err));
      }
    }
  };
};

export const setUserId = (id) => {
  return {
    type: USER.SET_ID,
    payload: {
      id: id,
    },
  };
};
