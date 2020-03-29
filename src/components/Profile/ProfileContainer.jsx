import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirectComponent';


class ProfileContainer extends React.Component {
    componentDidMount = (props) => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.loginUserId
        };
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    
    render = () => {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        )
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loginUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose (
    connect (mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
    ) 
    (ProfileContainer)