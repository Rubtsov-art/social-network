import React from 'react';
import style from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <li className={style.item}>
      <NavLink to={props.link} activeClassName={style.active}>{props.text}</NavLink>
    </li>
  )
};

export default NavItem;