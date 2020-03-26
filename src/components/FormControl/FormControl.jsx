import React from 'react';
import style from './FormControl.module.css';


export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div>
            <input className={hasError? style.error : " "} {...input} {...props}/>
          { hasError && <span className={style.errorText}>{meta.error}</span> }
        </div>
    )
}
