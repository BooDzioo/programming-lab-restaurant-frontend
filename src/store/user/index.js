import USER from './actionTypes';

const initialState = {
  id: '',
  name: '',
  surname: '',
  email: '',
  getUserInfoPending: false,
  getUserInfoErrorMessage: false,
};

const userReducer = (state = initialState, action) => {
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
      return {
        ...state,
        id: action.payload.id,
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
