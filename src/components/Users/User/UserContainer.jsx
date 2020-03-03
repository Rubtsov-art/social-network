import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import * as axios from 'axios';
import { addFriend, removeFriend, setUsers, changeCurrantPage, setTotalItemsCount } from '../../../redux/usersReducer';



class UsersResponseAPI extends React.Component {
    componentDidMount = (props) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currantPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalItemsCount(response.data.totalCount)
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.changeCurrantPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
        });
    };
    render = () => {
        return (<User pageSize={this.props.pageSize}
            totalItemsCount={this.props.totalItemsCount}
            onPageChanged={this.onPageChanged}
            currantPage={this.props.currantPage}
            usersList={this.props.usersList}
            addFriend={this.props.addFriend}
            removeFriend={this.props.removeFriend} />)
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

export default connect(mapStateToProps, 
    { addFriend,
        removeFriend,
        setUsers,
        changeCurrantPage,
        setTotalItemsCount,
    })(UsersResponseAPI)