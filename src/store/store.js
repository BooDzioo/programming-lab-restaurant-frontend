import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth';
import userReducer from './user';
import AUTH from './auth/actionTypes';

const appReducer = combineReducers({ auth: authReducer, user: userReducer });

const rootReducer = (state, action) => {
  if (action.type === AUTH.LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
