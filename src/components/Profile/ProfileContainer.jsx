import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';


class ProfileContainer extends React.Component {
    componentDidMount = (props) => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8
        };
        this.props.getUserProfile(userId);
    }
    
    render = () => {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let ProfileURLContainer = withRouter(ProfileContainer)

export default connect (mapStateToProps, {
    getUserProfile,
}) (ProfileURLContainer);