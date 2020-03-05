import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer';


class ProfileContainer extends React.Component {
    componentDidMount = (props) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/8`)
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

export default connect (mapStateToProps, {
    setUserProfile
}) (ProfileContainer);