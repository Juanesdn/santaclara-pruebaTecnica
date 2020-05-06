import axios from "axios";

import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  REMOVE_ERROR_MSG,
  LOGOUT_USER,
  GET_USER_INFO,
  GET_RULES,
  GET_RULE_GROUP,
  GET_RULE_OS,
  GET_TOP_RULES,
  GET_RULES_COMPLIANCE,
} from "./types";

/*
 User Authentication
*/
export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({ username, password }) => {
  const params = {
    username,
    email: "",
    password,
  };
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login/`, params)
      .then((response) => {
        loginUserSuccess(dispatch, response);
      })
      .catch(() => {
        loginUserFail(dispatch);
      });
  };
};

export const removeErrorMsg = (alertState) => {
  return {
    type: REMOVE_ERROR_MSG,
    payload: alertState,
  };
};

export const userLogout = () => {
  localStorage.removeItem("key");
  localStorage.removeItem("userInfo");

  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/logout/`)
      .then((response) => dispatch({ type: LOGOUT_USER }));
  };
};

export const getUserInfo = () => {
  const key = localStorage.getItem("key");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + key,
    },
  };

  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/auth/user/`, config)
      .then((response) => {
        dispatch({
          type: GET_USER_INFO,
          payload: response.data,
        });
      });
  };
};

// Helpers for user Login
export const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL,
  });
};

export const loginUserSuccess = (dispatch, user) => {
  localStorage.setItem("key", user.data.key);
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user.data.key,
  });
};

/*
 Rules
*/

export const getRules = () => {
  const key = localStorage.getItem("key");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + key,
    },
  };

  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/rules/`, config)
      .then((response) => {
        dispatch({
          type: GET_RULES,
          payload: response.data,
        });
      });
  };
};

export const getRuleGroup = (id) => {
  const key = localStorage.getItem("key");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + key,
    },
  };

  return (dispatch) => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/v1/rules/groups/${id}/`,
        config
      )
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_RULE_GROUP,
          payload: response.data,
        });
      });
  };
};

export const getTopRules = () => {
  const key = localStorage.getItem("key");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + key,
    },
  };

  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/rules/top/`, config)
      .then((response) => {
        dispatch({
          type: GET_TOP_RULES,
          payload: response.data,
        });
      });
  };
};

export const getRuleCompliance = () => {
  const key = localStorage.getItem("key");

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + key,
    },
  };

  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/rules/compliance/`, config)
      .then((response) => {
        dispatch({
          type: GET_RULES_COMPLIANCE,
          payload: response.data,
        });
      });
  };
};
