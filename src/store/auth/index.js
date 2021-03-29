import AUTH from './actionTypes';

const initialState = {
  token: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.REGISTER_STARTED: {
      return {
        ...state,
      };
    }
    case AUTH.REGISTER_FAILED: {
      console.log('index', action.payload.error);
      return {
        ...state,
      };
    }
    case AUTH.REGISTER_SUCCEEDED: {
      const { token } = action.payload;
      return {
        ...state,
        token: token,
      };
    }
    case AUTH.LOGIN_STARTED: {
      return {
        ...state,
      };
    }
    case AUTH.LOGIN_FAILED: {
      return {
        ...state,
      };
    }
    case AUTH.LOGIN_SUCCEEDED: {
      const { token } = action.payload;
      return {
        ...state,
        token: token,
      };
    }
    case AUTH.LOGOUT: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
