import AUTH from './actionTypes';

const initialState = {
  token: '',
  registrationFailed: false,
  registrationErrorMessage: '',
  registrationPending: false,
  isLoggedIn: false,
  loginFailed: false,
  loginErrorMessage: '',
  loginPending: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.REGISTER_STARTED: {
      return {
        ...state,
        registerPending: true,
      };
    }
    case AUTH.REGISTER_FAILED: {
      return {
        ...state,
        registerPending: false,
        registrationFailed: true,
        registrationErrorMessage: action.payload.error.message,
      };
    }
    case AUTH.REGISTER_SUCCEEDED: {
      const { token } = action.payload;
      return {
        ...state,
        registerPending: false,
        token: token,
        isLoggedIn: true,
      };
    }
    case AUTH.LOGIN_STARTED: {
      return {
        ...state,
        loginPending: true,
      };
    }
    case AUTH.LOGIN_FAILED: {
      return {
        ...state,
        loginPending: false,
        loginFailed: true,
        loginErrorMessage: action.payload.error.message,
      };
    }
    case AUTH.LOGIN_SUCCEEDED: {
      const { token } = action.payload;
      return {
        ...state,
        loginPending: false,
        token: token,
        isLoggedIn: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
