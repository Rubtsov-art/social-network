import React from 'react';
import style from './Users.module.css'
import UserContainer from './User/UserContainer';

type propsType = {}

const Users = (props: propsType) => {
    return (
        <section className={style.usersPage}>
                <UserContainer />
        </section>
    )
}

export default Users