import React from 'react';
import style from './Logo.module.css';

const Logo = React.memo((props) => {
    return (
      <div>
      <img className={style.logo__img} src='./img/Neon-style-text-effect.png' alt='neon' />
      </div>
    )
});

export default Logo;