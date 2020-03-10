import React from 'react';
import NavBar from './NavBar/NavBar';
import style from './Header.module.css';
import Logo from './Logo/Logo';
import LoginContainer from './Login/LoginContainer';

const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <LoginContainer />
      <NavBar />
    </header>
  )
};

export default Header;