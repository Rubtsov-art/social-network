import React, { useState } from 'react';
import style from './ProfileInfoContent.module.css';
import Contacts from '../Contacts/Contacts';

const ProfileInfoContent = (props) => {

    let [fullInfo, setFullInfo] = useState(false)

    const fullInfoOn = () => {
        setFullInfo(true)
    }

    const fullInfoOff = () => {
        setFullInfo(false)
    }

    return (
        <ul className={style.profileInfo}>
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
                <p className={style.contacts}>Contacts: 
                     { fullInfo ?
                     (<>
                     <span>
                         {Object.keys(props.profile.contacts).map(c => {
                         return <Contacts key={c} contactTitle={c} contactValue={props.profile.contacts[c]} />})}
                     </span>
                     <button onClick={fullInfoOff} className={style.buttonClose} aria-label={'close full Information'}>x</button>
                     </>)
                     : <button onClick={fullInfoOn} className={style.buttonOpen} aria-label={'open full Information'}>open</button>
                    }
                </p>
            </li>
        </ul>
    )
}

export default ProfileInfoContent