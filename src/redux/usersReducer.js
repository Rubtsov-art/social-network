const FRIEND = 'FRIEND';
const ENEMY = 'ENEMY';
const SET_USERS = 'SET-USERS'

let initialState = {
        usersData: [],
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
            return ({ ...state, usersData: [ ...state.usersData, ...action.usersData]})
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

export default usersReducer;
