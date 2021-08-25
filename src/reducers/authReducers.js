import {SIGN_IN_OK} from '../actions/types';
import {SIGN_OUT} from '../actions/types';
import {DATA_USERS} from '../constants/DataUser';

const initialState = {
  loginStatus: false,
  userLogin: {},
  userList: DATA_USERS,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_OK:
      return {
        ...state,
        loginStatus: true,
        userLogin: action.data,
      };
    case SIGN_OUT:
      return {
        ...state,
        loginStatus: false,
        userLogin: {},
      };
    default:
      return state;
  }
};

export default authReducer;
