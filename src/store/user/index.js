import USER from './actionTypes';

const initialState = () => {
  return {
    id: localStorage.getItem('userId') ?? '',
    name: '',
    surname: '',
    email: '',
    getUserInfoPending: false,
    getUserInfoErrorMessage: '',
    changePasswordPending: false,
    changePasswordErrorMessage: '',
  };
};

const userReducer = (state = initialState(), action) => {
  switch (action.type) {
    case USER.GET_INFO_STARTED: {
      return {
        ...state,
        getUserInfoPending: true,
      };
    }
    case USER.GET_INFO_SUCCEEDED: {
      const { name, surname, email } = action.payload.user;
      return {
        ...state,
        getUserInfoPending: false,
        name: name,
        surname: surname,
        email: email,
      };
    }
    case USER.GET_INFO_FAILED: {
      return {
        ...state,
        getUserInfoPending: false,
        getUserInfoErrorMessage: action.payload.error.message,
      };
    }
    case USER.SET_ID: {
      const userId = action.payload.id;
      localStorage.setItem('userId', userId);
      return {
        ...state,
        id: userId,
      };
    }
    case USER.CHANGE_PASSWORD_STARTED: {
      return {
        ...state,
        changePasswordPending: true,
      };
    }
    case USER.CHANGE_PASSWORD_SUCCEEDED: {
      return {
        ...state,
        changePasswordPending: false,
      };
    }
    case USER.CHANGE_PASSWORD_FAILED: {
      return {
        ...state,
        changePasswordErrorMessage: action.payload.error.message,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default userReducer;
