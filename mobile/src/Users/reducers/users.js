import { SET_USERS } from "../actions/actionTypes";

const initialState = {
    users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };

    default:
      return state;
  }
};

export default reducer;