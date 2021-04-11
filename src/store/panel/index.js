import PANEL from './actionTypes';

const initialState = () => {
  return {
    addUserPending: false,
    addUserErrorMessage: '',
    getAllUsersPending: false,
    getAllUsersErrorMessage: '',
    usersList: [],
  };
};

const panelReducer = (state = initialState(), action) => {
  switch (action.type) {
    case PANEL.ADD_USER_STARTED: {
      return {
        ...state,
        addUserPending: true,
      };
    }
    case PANEL.ADD_USER_FAILED: {
      return {
        ...state,
        addUserPending: false,
        addUserErrorMessage: action.payload.error.message,
      };
    }

    case PANEL.ADD_USER_SUCCEEDED: {
      return {
        ...state,
        addUserPending: false,
      };
    }
    case PANEL.GET_ALL_USERS_STARTED: {
      return {
        ...state,
        getAllUsersPending: true,
      };
    }
    case PANEL.GET_ALL_USERS_FAILED: {
      return {
        ...state,
        getAllUsersPending: false,
        getAllUsersErrorMessage: action.payload.error.message,
      };
    }
    case PANEL.GET_ALL_USERS_SUCCEEDED: {
      return {
        ...state,
        getAllUsersPending: false,
        usersList: action.payload.users,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default panelReducer;
