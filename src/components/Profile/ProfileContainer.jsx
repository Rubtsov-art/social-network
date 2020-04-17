import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirectComponent';

class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.loginUserId
        };
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount = (props) => {
        this.refreshProfile()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.match.params.userId != this.props.match.params.userId) {
            this.refreshProfile()
        }
    }
    
    render = () => {
        return (
            <Profile {...this.props} savePhoto={this.props.savePhoto} isOwner={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
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
    connect (mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    withRouter,
    withAuthRedirect
    ) 
    (ProfileContainer)