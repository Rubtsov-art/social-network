import React from 'react';
import style from './Logo.module.css';

const Logo = React.memo((props) => {
    return (
      <a className={style.logo__img}>
      <img src='https://i.pinimg.com/originals/18/41/77/18417797d05ffa17f27e8eee42a755dc.png' alt='crystal' />
    </a>
    )
});

export default Logo;