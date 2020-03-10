import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { setUsersData } from '../../../redux/authReducer';
import * as axios from 'axios';

class LoginContainer extends React.Component {
    componentDidMount = (props) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setUsersData(id, login, email)
            }
        });
    }
    render = () => {
        return (<Login {...this.props}/>)
    };
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect (mapStateToProps, {setUsersData}) (LoginContainer);