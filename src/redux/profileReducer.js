import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

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
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            }
        }
        case SET_USER_PROFILE: {
            return ({ ...state, profile: action.profile })
        }

        case SET_USER_STATUS: {
            return ({ ...state, status: action.status })
        }

        case SAVE_PHOTO_SUCCESS: {
            return ({...state, profile: {...state.profile, photos:action.photos}})
        }

        default: return state;

    };
};

export const savePhotoSuccess = (photos) => {
    return ({ type: SAVE_PHOTO_SUCCESS, photos})
};

export const actionCreatorAddPost = (formData) => {
    return ({ type: ADD_POST, formData })
};

export const deletePost = (postId) => {
    return ({ type: DELETE_POST, postId })
}

export const setUserProfile = (profile) => {
    return ({ type: SET_USER_PROFILE, profile })
}

export const setUserStatus = (status) => {
    return ({ type: SET_USER_STATUS, status })
}


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.setUserProfile(userId)
    dispatch(setUserProfile(response.data))

}


export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(response.data))
}


export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.saveUserPhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfileData = (profileData) => async (dispatch) => {
    let response = await profileAPI.saveUserProfile(profileData)
    if (response.data.resultCode === 0) {
        
    }
}

export default profileReducer;