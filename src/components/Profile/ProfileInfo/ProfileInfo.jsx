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
        props.saveProfileData(formData).then(
            () => {
                editModeOff()
            }
        )
    }

    return (<div className={style.info}>
             {editMode ? 
                <ProfileInfoForms initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> 
                : <ProfileInfoContent profile={props.profile}/>}
             {(props.isOwner && !editMode) ? <button className={style.editButton} onClick={editModeOn}>edit information</button> : null}
                
            </div>)
}

export default ProfileInfo