import React from 'react';
import style from './Contacts.module.css';

const Contacts = (props) => {
    return (
        <ul>
            <li>
                <p>{props.contactTitle}: <span>{props.contactValue}</span></p>
            </li>
        </ul>
    )
}

export default Contacts