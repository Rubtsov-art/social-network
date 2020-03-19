import React from 'react';
import Users from './Users';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirectComponent';

const UsersContainer = (props) => {
    return (
        <Users />
    )
}

export default compose (withAuthRedirect) (UsersContainer)