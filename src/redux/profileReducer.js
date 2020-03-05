const ADD_POST = 'ADD-POST';
const CHANGE_IN_TEXTAREA = 'CHANGE-IN-TEXTAREA';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
        postsData: [
            { id: '1', message: 'first post' },
            { id: '2', message: 'second post' },
            { id: '3', message: 'third post' },
        ],

        postFieldValue: "write post",
        profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: '4', 
                message: state.postFieldValue,
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
            return ({...state, profile: action.profile})
        }
        default: return state;
        
    };
};

export const actionCreatorAddPost = () => {
    return ({type: ADD_POST})
};

export const actionCreatorChangeInTextarea = (text) => {
    return ({type: CHANGE_IN_TEXTAREA, newText: text})
};

export const setUserProfile = (profile) => {
    return ({type: SET_USER_PROFILE, profile})
}

export default profileReducer;