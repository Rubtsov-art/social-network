import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { postDataType, profileType, photosType } from "../types/types";
import { ThunkAction } from "redux-thunk";
import { appStateType } from "./redux-store";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

export type initialType = {
    postsData: Array<postDataType>,
    postFieldValue: string,
    profile: null | profileType,
    status: string,
}

let initialState: initialType = {
    postsData: [
        { id: '1', message: 'first post' },
        { id: '2', message: 'second post' },
        { id: '3', message: 'third post' },
    ],

    postFieldValue: "write post",
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action: actionsType): initialType => {
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
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        }
        case SET_USER_PROFILE: {
            return ({ ...state, profile: action.profile })
        }

        case SET_USER_STATUS: {
            return ({ ...state, status: action.status })
        }

        case SAVE_PHOTO_SUCCESS: {
            return ({...state, profile: {...state.profile, photos:action.photos} as profileType})
        }

        default: return state;

    };
};

type actionsType = savePhotoSuccessType | actionCreatorAddPostType | deletePostType | 
setUserProfileType | setUserStatusType

type ThunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsType>

type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: photosType
}

export const savePhotoSuccess = (photos: photosType): savePhotoSuccessType => {
    return ({ type: SAVE_PHOTO_SUCCESS, photos})
};

type actionCreatorAddPostType = {
    type: typeof ADD_POST,
    formData: string
}

export const actionCreatorAddPost = (formData: string): actionCreatorAddPostType => {
    return ({ type: ADD_POST, formData })
};

type deletePostType = {
    type: typeof DELETE_POST,
    postId: string
}

export const deletePost = (postId: string) :deletePostType => {
    return ({ type: DELETE_POST, postId })
}

type setUserProfileType = {
    type: typeof SET_USER_PROFILE,
    profile: profileType
}

export const setUserProfile = (profile: profileType): setUserProfileType => {
    return ({ type: SET_USER_PROFILE, profile })
}

type setUserStatusType = {
    type: typeof SET_USER_STATUS,
    status: string
}

export const setUserStatus = (status: string) :setUserStatusType => {
    return ({ type: SET_USER_STATUS, status })
}

export const getUserProfile = (userId: number) :ThunkType => async (dispatch) => {
    let response = await profileAPI.setUserProfile(userId)
    dispatch(setUserProfile(response.data))

}


export const getUserStatus = (userId: number) :ThunkType => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(response.data))
}


export const updateUserStatus = (status: string) :ThunkType => async (dispatch) => {
    try {
        let response = await profileAPI.updateUserStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    } catch (error) {
        alert('error')
    }
}

export const savePhoto = (photo: any) :ThunkType => async (dispatch) => {
    let response = await profileAPI.saveUserPhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfileData = (profileData: profileType) => async (dispatch:any, getState:any) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveUserProfile(profileData)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit('profileData', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;