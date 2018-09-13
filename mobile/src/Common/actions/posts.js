import { uiStartLoading, uiStopLoading } from "./ui";
import { authGetToken } from './token';
import { SET_POSTS, POST_ADDED } from "./actionTypes";
import { BASE_URL } from '../config';
import moment from 'moment';


export const addPost = text => {
  return dispatch => {
    const newPost = {
        text,
        timestamp: moment().format('YYYY-MM-DD HH:mm:ss')
    }
    dispatch(uiStartLoading());
    dispatch(authGetToken())
    .catch(err => {
        console.log(err);
        console.log('No auth token exists!');
        alert("Please login again, your session is expired!");
    })
    .then(token => {
        return fetch(BASE_URL + 'posts', {
            method: 'POST',
            body: JSON.stringify(newPost),
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
        newPost.id = res.data.id;
        dispatch(postAdded(newPost));
        dispatch(uiStopLoading());
    });
  }
}


export const postAdded = newPost => {
    return {
        type: POST_ADDED,
        newPost
    }
}

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