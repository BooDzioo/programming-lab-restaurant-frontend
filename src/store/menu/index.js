import MENU from './actionTypes';

const initialState = () => {
  return {
    getMenuPending: false,
    getMenuErrorMessage: '',
    menu: {},
  };
};

const menuReducer = (state = initialState(), action) => {
  switch (action.type) {
    case MENU.GET_STARTED: {
      return {
        ...state,
        getMenuPending: true,
      };
    }
    case MENU.GET_FAILED: {
      return {
        ...state,
        getMenuPending: false,
        getMenuErrorMessage: action.payload.error.message,
      };
    }
    case MENU.GET_SUCCEEDED: {
      return {
        ...state,
        getMenuPending: false,
        menu: action.payload.menu,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default menuReducer;
