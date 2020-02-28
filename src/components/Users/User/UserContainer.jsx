import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import { friendAC, enemyAC, setUsersAC } from '../../../redux/usersReducer';

let mapStateToProps = (state) => {
    return ({
        usersList: state.usersPage.usersData,
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
    }
    })
};

export default connect (mapStateToProps, mapDispatchToProps) (User)