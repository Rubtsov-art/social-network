import React from 'react';

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