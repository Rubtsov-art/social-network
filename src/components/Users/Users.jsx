import React from 'react';
import style from './Users.module.css'
import UserContainer from './User/UserContainer';

const Users = (props) => {
    return (
        <section className={style.usersPage}>
                <UserContainer />
        </section>
    )
}

export default Users