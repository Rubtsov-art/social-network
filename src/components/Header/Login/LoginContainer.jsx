import React from 'react';
import Login from './Login';
import { connect } from 'react-redux'; 
import { logout } from '../../../redux/authReducer';


class LoginContainer extends React.Component {

    render = () => {
        return (<Login {...this.props}/>)
    };
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect (mapStateToProps, {logout}) (LoginContainer);