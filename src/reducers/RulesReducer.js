import { GET_RULES } from "../actions/types";

const INITIAL_STATE = {
  rules: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RULES:
      return {
        ...state,
        rules: action.payload.results,
      };
    default:
      return state;
  }
};
