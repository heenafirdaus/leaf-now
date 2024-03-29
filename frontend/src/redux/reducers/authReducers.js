import * as actionTypes from "../constants/ActionTypes";

const USER_INITIAL_STATE = {
  loading: true,
  user: {},
  error: '',
  isLoggedIn: false,
};

export const authReducers = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:{
      return { ...state, loading: true };
    }

    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isLoggedIn: true,
        error: ''
      };

    case actionTypes.USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isLoggedIn: false,
      };

    case actionTypes.USER_SIGNUP_REQUEST:
      return { ...state, loading: true, error:'' };

    case actionTypes.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        isLoggedIn: true,
        error:''
      };

    case actionTypes.USER_SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actionTypes.USER_LOGOUT_REQUEST:
      return { ...state, loading: true, error:'' };

    case actionTypes.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        error:''
      };

    case actionTypes.USER_LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
