import { AUTH_SET_TOKEN, MAIL_SENT } from "../actions/actionTypes";

const initialState = {
  token: null,
  mailSent: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case MAIL_SENT:
      return {
        ...state,
        mailSent: true
      };
    default:
      return state;
  }
};

export default reducer;