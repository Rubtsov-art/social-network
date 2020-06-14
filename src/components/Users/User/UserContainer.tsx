import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Preloader from '../../../reusingComponent/animation/Preloader';
import { createFriendship, deleteFriend, changeCurrantPage, getUsers } from '../../../redux/usersReducer';
import { getPortionSize, getUsersData, getCurrantPage, getPageSize, getTotalItemsCount, getIsFetching, getIsFollowingInProgress } from '../../../redux/usersSelectors';
import { userType } from '../../../types/types';
import { appStateType } from '../../../redux/redux-store';

type mapStatePropsType = {
    currantPage: number
    pageSize: number
    isFetching: boolean
    totalItemsCount: number
    usersList: Array<userType>
    isFollowingInProgress: Array<number>
    portionSize: number
}

type mapDispatchPropsType = {
    getUsers: (currantPage: number, pageSize: number) => void
    changeCurrantPage:(pageNumber: number) => void
    createFriendship: (id: number) => void
    deleteFriend: (id: number) => void
}

type PropsType = mapStatePropsType & mapDispatchPropsType

class UsersResponseAPI extends React.Component<PropsType> {
    componentDidMount = () => {
        this.props.getUsers(this.props.currantPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber: number) => {
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
                portionSize={this.props.portionSize} />
        </>)
    }
}
let mapStateToProps = (state: appStateType): mapStatePropsType => {
    return {
        usersList:  getUsersData(state), 
        currantPage: getCurrantPage(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
        portionSize: getPortionSize(state),
    }
};
export default connect(mapStateToProps,
    {
        createFriendship,
        deleteFriend,
        changeCurrantPage,
        getUsers,
    })(UsersResponseAPI)