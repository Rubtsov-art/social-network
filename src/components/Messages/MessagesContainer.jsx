import React from 'react';
import Messages from './Messages';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirectComponent';

const  MessagesContainer = (props) => {
    return (
        <Messages isAuth={props.isAuth} />
    )
}

const mapStateToProps = (state) => {
    return ({
    isAuth: state.auth.isAuth
    })
}

let authRedirect = withAuthRedirect (MessagesContainer)

export default connect (mapStateToProps, {}) (authRedirect);