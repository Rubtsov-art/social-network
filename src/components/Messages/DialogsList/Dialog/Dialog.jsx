import React from 'react';
import style from './Dialog.module.css'
import { NavLink } from 'react-router-dom';


const Dialog = props => {
  return (
    <li className={style.dialog}>
      <NavLink to={props.link} activeClassName={style.active}>{props.user}</NavLink>
    </li>
  )
};

export default Dialog;