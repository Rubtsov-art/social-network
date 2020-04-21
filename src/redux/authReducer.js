import { loginAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USERS_DATA = 'SET-USERS-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
            return ({
                ...state,
                ...action.payload
            })
        }
        default: return state;
    };
};

export const getCaptchaUrlSuccess = (captchaUrl) => {
    return ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})
}

export const setUsersData = (userId, login, email, isAuth) => {
    return ({ type: SET_USERS_DATA, payload: { userId, login, email, isAuth } })
};

export const getLogin = () => async (dispatch) => {
    let response = await loginAPI.setLogin()

    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setUsersData(id, login, email, true))
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await loginAPI.login(email, password, rememberMe, captcha)

    if (response.data.resultCode === 0) {
        dispatch(getLogin())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        const message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
        dispatch(stopSubmit('login', { _error: message }))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaURL()
    const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export const logout = () => async (dispatch) => {
        let response = await loginAPI.logout()

        if (response.data.resultCode === 0) {
            dispatch(setUsersData(null, null, null, false))
        }
    }

export default authReducer;