import React, { useState, useEffect } from 'react';
import style from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect ( () => {
        setStatus(props.status)
    }, [props.status]);

    const editModOn = () => {
        setEditMode(true)
    };

    const editModOff = () => {
        setEditMode(false);
        props.updateUserStatus(status)
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };
    
    return (
        <div>
            {editMode ?
                <input onChange={onStatusChange} autoFocus={true} onBlur={editModOff} value={status} />
                : <span onDoubleClick={editModOn}>{props.status || '---'}</span>
            }
        </div>
    )
};

export default ProfileStatusWithHooks