import React from 'react';
import style from './Friend.module.css';

const Friend = (props) => {
    return (<li>
            {props.friendName}
            </li>
    )
};

export default Friend