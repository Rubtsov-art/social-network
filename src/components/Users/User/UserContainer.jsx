import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import * as axios from 'axios';
import { friendAC, enemyAC, setUsersAC, changeCurrantPageAC, setTotalItemsCountAC } from '../../../redux/usersReducer';



class UsersResponseAPI extends React.Component {
    componentDidMount = (props) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currantPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalItemsCountAC(response.data.totalCount)
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.changeCurrantPageAC(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
        });
    };
    render = () => {
    return (<User  pageSize={this.props.pageSize}
        totalItemsCount={this.props.totalItemsCount}
        onPageChanged={this.onPageChanged}
        currantPage={this.props.currantPage}
        usersList={this.props.usersList}/>)
    }
}

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

export default connect (mapStateToProps, mapDispatchToProps) (UsersResponseAPI)