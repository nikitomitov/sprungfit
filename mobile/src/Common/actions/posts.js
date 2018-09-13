import { uiStartLoading, uiStopLoading } from "./ui";
import { authGetToken } from './token';
import { SET_POSTS } from "./actionTypes";
import { BASE_URL } from '../config';


export const getPosts = type => {
  return dispatch => {
    dispatch(uiStartLoading());

    dispatch(authGetToken())
    .catch(err => {
        conosole.log(err);
        console.log('No auth token exists!');
        alert("Please login again, your session is expired!");
    })
    .then(token => {
        return fetch(BASE_URL + 'posts/' + type, {
            headers: {
                 "Content-Type": "application/json; charset=utf-8",
                 "x-access-token" : token
             }
        });
    })
    .catch(err => {
        console.log(err);
        alert("Getting posts failed, please try again later!");
        dispatch(uiStopLoading());
    })
    .then(res => res.json())
    .then(res => {
        dispatch(setPosts(res.data, type));
        dispatch(uiStopLoading());
    });
  }
}


export const setPosts = (posts, postsType) => {
    return {
        type: SET_POSTS,
        posts,
        postsType
    }
}