import { USER_PROFILE_SET, USER_PROFILE_UPDATED, CITIES_SET, TAGS_SET } from "../actions/actionTypes";

const initialState = {
    userProfile: null,
    cities: null,
    tags: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_SET:
      return {
        ...state,
        userProfile: action.user
      };
    case USER_PROFILE_UPDATED:
      return {
        ...state,
        userProfile: action.newProfile
      };
     case TAGS_SET:
      return {
        ...state,
        tags: action.tags
      };
     case CITIES_SET:
      return {
        ...state,
        cities: action.cities
      };
    default:
      return state;
  }
};

export default reducer;