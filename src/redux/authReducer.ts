import { loginAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USERS_DATA = 'SET-USERS-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS';

export type initialStateType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}

let initialState: initialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action: any) :initialStateType => {
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

type getCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl: string}
}

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessType => {
    return ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})
}

type setUsersDataTypeActionPayload = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

type setUsersDataType = {
    type: typeof SET_USERS_DATA,
    payload: setUsersDataTypeActionPayload
}

export const setUsersData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): setUsersDataType => {
    return ({ type: SET_USERS_DATA, payload: { userId, login, email, isAuth } })
};

export const getLogin = () => async (dispatch: any) => {
    let response = await loginAPI.setLogin()

    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setUsersData(id, login, email, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
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

export const getCaptchaUrl = () => async (dispatch: any) => {
    let response = await securityAPI.getCaptchaURL()
    const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export const logout = () => async (dispatch: any) => {
        let response = await loginAPI.logout()

        if (response.data.resultCode === 0) {
            dispatch(setUsersData(null, null, null, false))
        }
    }

export default authReducer;