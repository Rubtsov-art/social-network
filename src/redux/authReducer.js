import { loginAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USERS_DATA = 'SET-USERS-DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA: {
            return ({
                ...state,
                ...action.data
            })
        }
        default: return state;
    };
};

export const setUsersData = (userId, login, email, isAuth) => {
    return ({ type: SET_USERS_DATA, data: { userId, login, email, isAuth } })
};

export const getLogin = () => async (dispatch) => {
    let response = await loginAPI.setLogin()

    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setUsersData(id, login, email, true))
    }

}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await loginAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getLogin())
    } else {
        const message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
        dispatch(stopSubmit('login', { _error: message }))
    }

}


export const logout = () => async (dispatch) => {
        let response = await loginAPI.logout()

        if (response.data.resultCode === 0) {
            dispatch(setUsersData(null, null, null, false))
        }
    }

export default authReducer;