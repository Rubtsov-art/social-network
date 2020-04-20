import React from 'react';
import style from './ProfileInfoContent.module.css';
import Contacts from '../Contacts/Contacts';

const ProfileInfoContent = (props) => {
    return (
        <ul>
            <li>
                <p> Full name:<span>{props.profile.fullName}</span></p>
            </li>
            <li>
                <p>Looking for a job: <span>{props.profile.lookingForAJob ? 'yes' : 'no'}</span></p>
            </li>
            {props.profile.lookingForAJob && <li><p>My skills:<span>{props.profile.lookingForAJobDescription}</span></p></li>}
            <li>
                <p>About me: <span>{props.profile.aboutMe}</span></p>
            </li>
            <li>
                <p>Contacts: <span>{Object.keys(props.profile.contacts).map(c => {
                    return <Contacts key={c} contactTitle={c} contactValue={props.profile.contacts[c]} />
                })}</span></p>
            </li>
        </ul>
    )
}

export default ProfileInfoContent