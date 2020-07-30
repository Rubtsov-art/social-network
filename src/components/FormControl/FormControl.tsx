import React from 'react';
import style from './FormControl.module.css';
import { WrappedFieldProps } from 'redux-form';

// type formPropsType = {
//     input: string
//     meta: {
//         touched: boolean
//         error: string
//     }
//     props: {}
// }


export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return ( 
        <div>
            <textarea className={hasError? style.error : " "} {...input} {...props}/>
          { hasError && <span className={style.errorText}>{meta.error}</span> }
        </div>
    )
}

export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div>
            <input className={hasError? style.error : " "} {...input} {...props}/>
          { hasError && <span className={style.errorText}>{meta.error}</span> }
        </div>
    )
}
