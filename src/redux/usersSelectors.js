export const getUsersData = (state) => {
   return state.usersPage.usersData
}

export const getCurrantPage = (state) => {
    return state.usersPage.currantPage
 }

 export const getPageSize = (state) => {
    return state.usersPage.pageSize
 }

 export const getTotalItemsCount = (state) => {
    return state.usersPage.totalItemsCount
 }

 export const getIsFetching = (state) => {
    return state.usersPage.isFetching
 }

 export const getIsFollowingInProgress = (state) => {
    return state.usersPage.isFollowingInProgress
 }
 