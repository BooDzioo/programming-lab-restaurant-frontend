import AUTH from './actionTypes';

export const loginUser = () => {
  return {
    type: AUTH.LOGIN,
  };
};

export const registerUser = () => {
  return {
    type: AUTH.REGISTER,
  };
};
