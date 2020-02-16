import React from 'react';
import NavBar from './NavBar/NavBar';
import style from './Header.module.css';
import Logo from './Logo/Logo';

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <NavBar />
    </header>
  )
};

export default Header;