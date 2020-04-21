import React from 'react';
import style from './Friend.module.css';

const Friend = (props) => {
    return (
        <li> key={props.key}
            {props.friendName}
        </li>
    )
};

export default Friend