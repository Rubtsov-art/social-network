import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { getLogin, logout } from '../../../redux/authReducer';


class LoginContainer extends React.Component {
    componentDidMount = (props) => {
        this.props.getLogin()
    }
    render = () => {
        return (<Login {...this.props}/>)
    };
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect (mapStateToProps, {getLogin, logout}) (LoginContainer);