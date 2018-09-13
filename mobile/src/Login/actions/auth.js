import { TRY_AUTH, AUTH_SET_TOKEN, MAIL_SENT } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./index";
import startMainApp from './startMainApp';
import { BASE_URL } from '../../Common/config';


export const tryRegister = regData => {
  return dispatch => {
    dispatch(uiStartLoading());
    regData = JSON.stringify(regData);

    fetch(BASE_URL + 'auth/register', {
        method: "POST",
        body: regData,
        headers: {
          "Content-Type": "application/json"
        }
    })
    .catch(err => {
      console.log(err);
      alert("Registration failed, please try again!");
      dispatch(uiStopLoading());
    })
    .then(res => res.json())
    .then(resJson => {      
      dispatch(uiStopLoading());        

      if (!resJson.token) {
        alert("Registration failed, please try again!");
      } else {
        dispatch(authSetToken(resJson.token));
        startMainApp();
      }    
    });
  };
}

export const tryAuth = authData => {
  return dispatch => {
    dispatch(uiStartLoading());
    fetch(BASE_URL + 'auth/login', {
      method: "POST",
      body: JSON.stringify(authData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .catch(err => {
      console.log(err);
      alert("Authentication failed, please try again!");
      dispatch(uiStopLoading());
    })
    .then(res => res.json())
    .then(resJson => {
      dispatch(uiStopLoading());        

      if (!resJson.token) {
        alert("Authentication failed, please try again!");
      } else {
        dispatch(authSetToken(resJson.token));
        startMainApp();
      }
    });
  };
};


export const authSetToken = token => {
  return {
    type: AUTH_SET_TOKEN,
    token: token
  };
};