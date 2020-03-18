import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { getLogin } from '../../../redux/authReducer';
import { compose } from 'redux';


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

export default connect (mapStateToProps, {getLogin}) (LoginContainer);