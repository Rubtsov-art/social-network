import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Login.module.css';

const Login = (props) => {
    return (
        <div>
            {props.isAuth ? 
            <div className={style.login}>{props.login} - <button onClick={props.logout}>Logout</button></div>
            : <NavLink to={'/login'} className={style.login}>Login</NavLink>}
        </div>
    );
};

export default Login