import React from 'react';
import style from './NavBar.module.css';
import NavItem from './NavItem/NavItem';

const NavBar = React.memo((props) => {
  return (
    <nav className={style.global_navigation}>
      <ul className={style.list}>
        <NavItem link='/profile' text='profile' />
        <NavItem link='/messages' text='messages' />
        <NavItem link='/settings' text='settings' />
        <NavItem link='/music' text='music' />
        <NavItem link='/photos' text='photos' />
        <NavItem link='/users' text='users' />
      </ul>
    </nav>
  )
})

export default NavBar;