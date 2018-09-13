import { SET_POSTS, POST_ADDED } from "../actions/actionTypes";

const initialState = {
    ownPosts: [],
    feedPosts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      if (action.postsType === 'own')
        return {
          ...state,
          ownPosts: action.posts
        };
      else
        return {
          ...state,
          feedPosts: action.posts
        }; 

    case POST_ADDED: 
        return {
          ...state,
          ownPosts: [action.newPost, ...state.ownPosts]
        }

    default:
      return state;
  }
};

export default reducer;