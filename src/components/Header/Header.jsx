import React from 'react';
import NavBar from './NavBar/NavBar';
import style from './Header.module.css';
import Logo from './Logo/Logo';
import LoginContainer from './Login/LoginContainer';

const Header = React.memo((props) => {
  return (
    <header className={style.header}>
      <Logo /> 
      <NavBar />
      <LoginContainer />
    </header>
  )
});

export default Header;