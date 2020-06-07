import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Preloader from '../../../reusingComponent/animation/Preloader';
import { createFriendship, deleteFriend, changeCurrantPage, toggleAddFriendInProgress, getUsers } from '../../../redux/usersReducer';
import { getPortionSize, getUsersData, getCurrantPage, getPageSize, getTotalItemsCount, getIsFetching, getIsFollowingInProgress } from '../../../redux/usersSelectors';



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
                toggleAddFriendInProgress={this.props.toggleAddFriendInProgress}
                portionSize={this.props.portionSize} />
        </>)
    }
}
let mapStateToProps = (state) => {
    return ({
        usersList:  getUsersData(state), 
        currantPage: getCurrantPage(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
        portionSize: getPortionSize(state),
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