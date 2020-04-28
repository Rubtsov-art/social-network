import React from 'react';
import style from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={style.preloader}>
            <div className={style.loader}></div>
        </div>
    )
}

export default Preloader