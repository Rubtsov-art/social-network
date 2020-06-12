import { appStateType } from "./redux-store"

export const getUsersData = (state: appStateType) => {
   return state.usersPage.usersData
}

export const getCurrantPage = (state: appStateType) => {
    return state.usersPage.currantPage
 }

 export const getPageSize = (state: appStateType) => {
    return state.usersPage.pageSize
 }

 export const getTotalItemsCount = (state: appStateType) => {
    return state.usersPage.totalItemsCount
 }

 export const getIsFetching = (state: appStateType) => {
    return state.usersPage.isFetching
 }

 export const getIsFollowingInProgress = (state: appStateType) => {
    return state.usersPage.isFollowingInProgress
 }

 export const getPortionSize = (state: appStateType) => {
    return state.usersPage.portionSize
 }
 