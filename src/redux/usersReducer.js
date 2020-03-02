const FRIEND = 'FRIEND';
const ENEMY = 'ENEMY';
const SET_USERS = 'SET-USERS';
const CHANGE_CURRANT_PAGE = 'CHANGE-CURRANT-PAGE';
const SET_TOTAL_ITEMS_COUNT = 'SET-TOTAL-ITEMS-COUNT';

let initialState = {
        usersData: [],
        currantPage: 1,
        pageSize: 5,
        totalItemsCount: 0,
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
            return ({ ...state, usersData: [ ...action.usersData]})
        }
        case CHANGE_CURRANT_PAGE: {
            return ({...state, currantPage: action.number})
        }
        case SET_TOTAL_ITEMS_COUNT: {
            return ({...state, totalItemsCount: action.totalCount})
        }
        default: return state;
        
    };
};

export const friendAC = (userId) => {
    return ({type: FRIEND, id: userId})
};

export const enemyAC = (userId) => {
    return ({type: ENEMY, id: userId})
};

export const setUsersAC = (usersData) => {
    return ({type: SET_USERS, usersData})
}

export const changeCurrantPageAC = (number) => {
    return ({type: CHANGE_CURRANT_PAGE, number})
}

export const setTotalItemsCountAC = (totalCount) => {
    return ({type: SET_TOTAL_ITEMS_COUNT, totalCount})
}

export default usersReducer;
