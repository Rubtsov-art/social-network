import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Preloader from '../../../reusingComponent/animation/Preloader';
import { createFriendship, deleteFriend, changeCurrantPage, toggleAddFriendInProgress, getUsers } from '../../../redux/usersReducer';



class UsersResponseAPI extends React.Component {
    componentDidMount = (props) => {
        this.props.getUsers(this.props.currantPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.changeCurrantPage(pageNumber);
    };
    render = () => {
        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <User pageSize={this.props.pageSize}
                totalItemsCount={this.props.totalItemsCount}
                onPageChanged={this.onPageChanged}
                currantPage={this.props.currantPage}
                usersList={this.props.usersList}
                createFriendship={this.props.createFriendship}
                deleteFriend={this.props.deleteFriend}
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
        createFriendship,
        deleteFriend,
        changeCurrantPage,
        toggleAddFriendInProgress,
        getUsers,
    })(UsersResponseAPI)