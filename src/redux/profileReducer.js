import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_IN_TEXTAREA = 'CHANGE-IN-TEXTAREA';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
    postsData: [
        { id: '1', message: 'first post' },
        { id: '2', message: 'second post' },
        { id: '3', message: 'third post' },
    ],

    postFieldValue: "write post",
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: '4',
                message: action.formData,
            };
            return ({
                ...state,
                postsData: [...state.postsData, newPost],
            })
        }
        case CHANGE_IN_TEXTAREA: {
            return ({
                ...state,
                postFieldValue: action.newText,
            })
        }
        case SET_USER_PROFILE: {
            return ({ ...state, profile: action.profile })
        }

        case SET_USER_STATUS: {
            return ({ ...state, status: action.status })
        }
        default: return state;

    };
};

export const actionCreatorAddPost = (formData) => {
    return ({ type: ADD_POST, formData })
};

export const actionCreatorChangeInTextarea = (text) => {
    return ({ type: CHANGE_IN_TEXTAREA, newText: text })
};

export const setUserProfile = (profile) => {
    return ({ type: SET_USER_PROFILE, profile })
}

export const setUserStatus = (status) => {
    return ({ type: SET_USER_STATUS, status })
}


export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.setUserProfile(userId)
            .then((response) => {
                dispatch(setUserProfile(response.data))
            });
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then((response) => {
                dispatch(setUserStatus(response.data))
            });
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }
}

export default profileReducer;