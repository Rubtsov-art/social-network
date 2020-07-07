//import { toggleAddFriendInProgress } from './usersReducer';
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../api/utilits/arraysReader";
import { userType } from "../types/types";
import { appStateType } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import { Dispatch } from "react";

const FRIEND = 'FRIEND';
const ENEMY = 'ENEMY';
const SET_USERS = 'SET-USERS';
const CHANGE_CURRANT_PAGE = 'CHANGE-CURRANT-PAGE';
const SET_TOTAL_ITEMS_COUNT = 'SET-TOTAL-ITEMS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_ADD_FRIEND_IN_PROGRESS = 'TOGGLE_ADD_FRIEND_IN_PROGRESS';

let initialState = {
    usersData: [] as Array<userType> | null,
    currantPage: 1 as number,
    pageSize: 5 as number,
    totalItemsCount: 0 as number,
    isFetching: false as boolean,
    isFollowingInProgress: [] as Array<number>,
    portionSize: 5 as number,
}

export type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: actionsType) => {
    switch (action.type) {
        case FRIEND: {
            return ({
                ...state,
                usersData: updateObjectInArray (state.usersData, action.id, 'id', {friend:true})
            })
        }
        case ENEMY: {
            return ({
                ...state,
                usersData: updateObjectInArray (state.usersData, action.id, 'id', {friend:false})
            })
        }
        case SET_USERS: {
            return ({ ...state, usersData: [...action.usersData] })
        }
        case CHANGE_CURRANT_PAGE: {
            return ({ ...state, currantPage: action.number })
        }
        case SET_TOTAL_ITEMS_COUNT: {
            return ({ ...state, totalItemsCount: action.totalCount })
        }
        case TOGGLE_IS_FETCHING: {
            return ({ ...state, isFetching: action.isFetching })
        }
        case TOGGLE_ADD_FRIEND_IN_PROGRESS: {
            return ({
                ...state,
                isFollowingInProgress: action.isInProgress
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId)
            })
        }
        default: return state;

    };
};

type actionsType = addFriendType | removeFriendType | setUsersType | changeCurrantPageType | 
setTotalItemsCountType | toggleIsFetchingType | toggleAddFriendInProgressType

type ThunkType = ThunkAction<Promise<void>, appStateType, unknown, actionsType>

type addFriendType = {
    type: typeof FRIEND,
    id: number
}

export const addFriend = (userId: number) :addFriendType => {
    return ({ type: FRIEND, id: userId })
};

type removeFriendType = {
    type: typeof ENEMY,
    id: number
}

export const removeFriend = (userId: number): removeFriendType => {
    return ({ type: ENEMY, id: userId })
};

type setUsersType = {
    type: typeof SET_USERS,
    usersData: Array<userType>
}

export const setUsers = (usersData: Array<userType>): setUsersType => {
    return ({ type: SET_USERS, usersData })
}

type changeCurrantPageType = {
    type: typeof CHANGE_CURRANT_PAGE,
    number: number
}

export const changeCurrantPage = (number: number): changeCurrantPageType => {
    return ({ type: CHANGE_CURRANT_PAGE, number })
}

type setTotalItemsCountType = {
    type: typeof SET_TOTAL_ITEMS_COUNT,
    totalCount: number
}

export const setTotalItemsCount = (totalCount: number): setTotalItemsCountType => {
    return ({ type: SET_TOTAL_ITEMS_COUNT, totalCount })
}

type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => {
    return ({ type: TOGGLE_IS_FETCHING, isFetching })
}

type toggleAddFriendInProgressType = {
    type: typeof TOGGLE_ADD_FRIEND_IN_PROGRESS,
    isInProgress: boolean,
    userId: number
}

export const toggleAddFriendInProgress = (isInProgress: boolean, userId: number): toggleAddFriendInProgressType => {
    return ({ type: TOGGLE_ADD_FRIEND_IN_PROGRESS, isInProgress, userId })
}


export const getUsers = (currantPage: number, 
                         pageSize: number): ThunkType => {
    return async (dispatch, state) => {
        dispatch(toggleIsFetching(true));

        let data = await usersAPI.getUsers(currantPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalItemsCount(data.totalCount))

    }
}

const addAndDeleteFriendFlow = async (id: number, dispatch: Dispatch<actionsType>, APIMethod: any, actionCreator: (userId:number) => addFriendType | removeFriendType) => {
    dispatch(toggleAddFriendInProgress(true, id));
    let response = await APIMethod(id);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleAddFriendInProgress(false, id))

} 

export const deleteFriend = (id: number) :ThunkType => {
    return async (dispatch) => {
        let APIMethod = usersAPI.toEnemy.bind(usersAPI)
        let actionCreator = removeFriend
        addAndDeleteFriendFlow (id, dispatch, APIMethod, actionCreator)
    }
}

export const createFriendship = (id: number) :ThunkType => {
    return async (dispatch) => {
        let APIMethod = usersAPI.toFriend.bind(usersAPI)
        let actionCreator = addFriend
        addAndDeleteFriendFlow (id, dispatch, APIMethod, actionCreator)
    }
}


export default usersReducer;
