import React from 'react';
import Users from './Users';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirectComponent';

type propsType = {}

const UsersContainer = (props: propsType) => {
    return (
        <Users />
    )
}

export default compose (withAuthRedirect) (UsersContainer)