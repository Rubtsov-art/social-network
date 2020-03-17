import { loginAPI } from "../api/api";

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
                ...action.data,
                isAuth: true,
            })
        }
        default: return state;
    };
};

export const setUsersData = (userId, login, email) => {
    return ({type: SET_USERS_DATA, data: {userId, login, email}})
};

export const getLogin = () => {
    return (dispatch) => {
        loginAPI.setLogin()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setUsersData(id, login, email))
            }
        });
    }
}

export default authReducer;