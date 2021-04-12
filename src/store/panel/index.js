import PANEL from './actionTypes';

const initialState = () => {
  return {
    addUserPending: false,
    addUserErrorMessage: '',
    getAllUsersPending: false,
    getAllUsersErrorMessage: '',
    deleteUserPending: false,
    deleteUserErrorMessage: '',
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
    case PANEL.GET_ALL_USERS_CLEAR_ERROR_MESSAGE: {
      return {
        ...state,
        getAllUsersErrorMessage: '',
      };
    }
    case PANEL.ADD_USER_CLEAR_ERROR_MESSAGE: {
      return {
        ...state,
        addUserErrorMessage: '',
      };
    }
    case PANEL.DELETE_USER_STARTED: {
      return {
        ...state,
        deleteUserPending: true,
      };
    }
    case PANEL.DELETE_USER_FAILED: {
      return {
        ...state,
        deleteUserPending: false,
      };
    }
    case PANEL.DELETE_USER_SUCCEEDED: {
      return {
        ...state,
        deleteUserPending: false,
        deleteUserErrorMessage: action.payload.error.message,
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
