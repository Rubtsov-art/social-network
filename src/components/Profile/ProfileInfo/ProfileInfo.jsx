import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import ProfileInfoContent from './ProfileInfoContent/ProfileInfoContent'
import ProfileInfoForms from './ProfileInfoForms/ProfileInfoForms';

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    const editModeOn = () => {
        setEditMode(true)
    }

    const editModeOff = () => {
        setEditMode(false)
    }

    const onSubmit = (formData) => {
        props.saveProfileData(formData)
    }

    return (<div>
             {editMode ? 
                <ProfileInfoForms profile={props.profile} onSubmit={onSubmit}/> 
                : <ProfileInfoContent profile={props.profile}/>};
             {props.isOwner && <div>isOwner</div>}
                <button onClick={editModeOff}>save</button>
                <button onClick={editModeOn}>edit</button>
            </div>)
}

export default ProfileInfo