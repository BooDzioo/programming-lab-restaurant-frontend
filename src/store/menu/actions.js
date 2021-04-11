import MENU from './actionTypes';
import api from '../../utils/api/api';

const getMenuStarted = () => {
  return {
    type: MENU.GET_STARTED,
  };
};

const getMenuFailed = (err) => {
  return {
    type: MENU.GET_FAILED,
    payload: {
      error: err,
    },
  };
};

const getMenuSucceeded = (menu) => {
  return {
    type: MENU.GET_SUCCEEDED,
    payload: {
      menu: menu,
    },
  };
};

export const getMenu = () => {
  return async (dispatch) => {
    dispatch(getMenuStarted());
    try {
      const response = await api.getMenu();
      dispatch(getMenuSucceeded(response));
    } catch (err) {
      dispatch(getMenuFailed(err.response.data));
    }
  };
};
