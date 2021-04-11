import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AUTH from './auth/actionTypes';
import authReducer from './auth';
import userReducer from './user';
import menuReducer from './menu';

const appReducer = combineReducers({ auth: authReducer, user: userReducer, menu: menuReducer });

const rootReducer = (state, action) => {
  if (action.type === AUTH.LOGOUT) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    state = undefined;
  }
  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
