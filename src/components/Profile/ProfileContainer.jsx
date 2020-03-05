import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
    componentDidMount = (props) => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8
        };
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then((response) => {
            this.props.setUserProfile(response.data)
        });
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
    setUserProfile
}) (ProfileURLContainer);