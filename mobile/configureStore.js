import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import uiReducer from "./src/Common/reducers/ui";
import postsReducer from "./src/Common/reducers/posts";
import authReducer from "./src/Login/reducers/auth";
import usersReducer from "./src/Users/reducers/users";


const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  posts: postsReducer,
  users: usersReducer
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
