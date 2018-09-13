import { uiStartLoading, uiStopLoading } from "./index";
import { authGetToken } from '../../Common/actions/token';
import { SET_USERS } from "../actions/actionTypes";
import { BASE_URL } from '../../Common/config';


export const getUsers = () => {
  return dispatch => {
    dispatch(uiStartLoading());

    dispatch(authGetToken())
    .catch(err => {
        conosole.log(err);
        console.log('No auth token exists!');
        alert("Please login again, your session is expired!");
    })
    .then(token => {
        return fetch(BASE_URL + 'users', {
            headers: {
                 "Content-Type": "application/json; charset=utf-8",
                 "x-access-token" : token
             }
        });
    })
    .catch(err => {
        console.log(err);
        alert("Getting users failed, please try again later!");
        dispatch(uiStopLoading());
    })
    .then(res => res.json())
    .then(res => {
        dispatch(setUsers(res.data));
        dispatch(uiStopLoading());
    });
  }
}


export const setUsers = users => {
    return {
        type: SET_USERS,
        users
    }
}