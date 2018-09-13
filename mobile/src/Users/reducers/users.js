import { SET_USERS, USER_FOLLOWED } from "../actions/actionTypes";

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

    case USER_FOLLOWED: {
      const users = [...state.users];
      const index = users.findIndex(u => u.id === action.userId);
      users[index] = {...users[index], isFollowing: true};
      
      return {
        ...state,
        users
      };
    }

    default:
      return state;
  }
};

export default reducer;