import {
  GET_RULES,
  GET_TOP_RULES,
  GET_RULES_COMPLIANCE,
} from "../actions/types";

const INITIAL_STATE = {
  rules: null,
  ruleGroup: "",
  topRules: [],
  ruleCompliance: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RULES:
      return {
        ...state,
        rules: action.payload.results,
      };
    case GET_TOP_RULES:
      return { ...state, topRules: action.payload };
    case GET_RULES_COMPLIANCE:
      return { ...state, ruleCompliance: action.payload };
    default:
      return state;
  }
};
