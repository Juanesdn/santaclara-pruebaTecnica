import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REMOVE_ERROR_MSG,
  LOGOUT_USER,
  GET_USER_INFO,
} from "../actions/types";

const INITIAL_STATE = {
  username: "",
  password: "",
  user: null,
  error: false,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: false };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: true,
      };
    case REMOVE_ERROR_MSG:
      return { ...state, error: action.payload };
    case LOGOUT_USER:
      return { INITIAL_STATE };
    case GET_USER_INFO:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
