import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import { friendAC, enemyAC, setUsersAC, changeCurrantPageAC, setTotalItemsCountAC } from '../../../redux/usersReducer';

let mapStateToProps = (state) => {
    return ({
        usersList: state.usersPage.usersData,
        currantPage: state.usersPage.currantPage,
        pageSize: state.usersPage.pageSize,
        totalItemsCount: state.usersPage.totalItemsCount,
    })
};

let mapDispatchToProps = (dispatch) => {
    return ({
    addFriend: (userId) => {
        dispatch(friendAC(userId))
    },
    removeFriend: (userId) => {
        dispatch(enemyAC(userId))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    },
    changeCurrantPageAC: (number) => {
        dispatch(changeCurrantPageAC(number))
    },
    setTotalItemsCountAC: (totalCount) => {
        dispatch(setTotalItemsCountAC(totalCount))
    },
    })
};

export default connect (mapStateToProps, mapDispatchToProps) (User)