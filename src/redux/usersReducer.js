const FRIEND = 'FRIEND';
const ENEMY = 'ENEMY';
const SET_USERS = 'SET-USERS';
const CHANGE_CURRANT_PAGE = 'CHANGE-CURRANT-PAGE';
const SET_TOTAL_ITEMS_COUNT = 'SET-TOTAL-ITEMS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_ADD_FRIEND_IN_PROGRESS = 'TOGGLE_ADD_FRIEND_IN_PROGRESS';

let initialState = {
        usersData: [],
        currantPage: 1,
        pageSize: 5,
        totalItemsCount: 0,
        isFetching: false,
        isFollowingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FRIEND:{
            return ({
                ...state,
                usersData: state.usersData.map((u) => { 
                    if (u.id === action.id) {
                        return {...u, friend: true}
                    } 
                    return u;
                })
            })
        }
        case ENEMY: {
            return ({
                ...state,
                usersData: state.usersData.map((u) => { 
                    if (u.id === action.id) {
                        return {...u, friend: false}
                    } 
                    return u;
                })
            })
        }
        case SET_USERS: {
            return ({...state, usersData: [ ...action.usersData]})
        }
        case CHANGE_CURRANT_PAGE: {
            return ({...state, currantPage: action.number})
        }
        case SET_TOTAL_ITEMS_COUNT: {
            return ({...state, totalItemsCount: action.totalCount})
        }
        case TOGGLE_IS_FETCHING: {
            return({...state, isFetching: action.isFetching})
        }
        case TOGGLE_ADD_FRIEND_IN_PROGRESS: {
            return ({
                ...state, 
                isFollowingInProgress: action.isInProgress
               ? [...state.isFollowingInProgress, action.userId]
               : state.isFollowingInProgress.filter(id => id != action.userId)
            })
        }
        default: return state;
        
    };
};

export const addFriend = (userId) => {
    return ({type: FRIEND, id: userId})
};

export const removeFriend = (userId) => {
    return ({type: ENEMY, id: userId})
};

export const setUsers = (usersData) => {
    return ({type: SET_USERS, usersData})
}

export const changeCurrantPage = (number) => {
    return ({type: CHANGE_CURRANT_PAGE, number})
}

export const setTotalItemsCount = (totalCount) => {
    return ({type: SET_TOTAL_ITEMS_COUNT, totalCount})
}

export const toggleIsFetching = (isFetching) => {
    return ({type: TOGGLE_IS_FETCHING, isFetching})
}

export const toggleAddFriendInProgress = (isInProgress, userId) => {
    return ({ type: TOGGLE_ADD_FRIEND_IN_PROGRESS, isInProgress, userId})
}


export default usersReducer;
