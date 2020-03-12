import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Preloader from '../../../reusingComponent/animation/Preloader';
import { addFriend, removeFriend, setUsers, changeCurrantPage, setTotalItemsCount, toggleIsFetching, toggleAddFriendInProgress } from '../../../redux/usersReducer';
import { usersAPI } from '../../../api/api';



class UsersResponseAPI extends React.Component {
    componentDidMount = (props) => {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currantPage, this.props.pageSize)
            .then((data) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalItemsCount(data.totalCount)
            });
    };

    onPageChanged = (pageNumber) => {
        this.props.changeCurrantPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items)
                this.props.toggleIsFetching(false)
            });
    };
    render = () => {
        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <User pageSize={this.props.pageSize}
                totalItemsCount={this.props.totalItemsCount}
                onPageChanged={this.onPageChanged}
                currantPage={this.props.currantPage}
                usersList={this.props.usersList}
                addFriend={this.props.addFriend}
                removeFriend={this.props.removeFriend}
                isFollowingInProgress={this.props.isFollowingInProgress}
                toggleAddFriendInProgress={this.props.toggleAddFriendInProgress} />
        </>)
    }
}

let mapStateToProps = (state) => {
    return ({
        usersList: state.usersPage.usersData,
        currantPage: state.usersPage.currantPage,
        pageSize: state.usersPage.pageSize,
        totalItemsCount: state.usersPage.totalItemsCount,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress,
    })
};

export default connect(mapStateToProps,
    {
        addFriend,
        removeFriend,
        setUsers,
        changeCurrantPage,
        setTotalItemsCount,
        toggleIsFetching,
        toggleAddFriendInProgress,
    })(UsersResponseAPI)