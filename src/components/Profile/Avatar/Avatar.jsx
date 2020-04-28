import React from 'react';
import style from './Avatar.module.css'
import Preloader from '../../../reusingComponent/animation/Preloader';
import { useState } from 'react';

const Avatar = (props) => {

  let [editMode, setEditMode] = useState(false);

  const editModeOn = () => {
    setEditMode(true);
  }

  const editModeOff = () => {
    setEditMode(false);
  }

  if (!props.profile) {
    return <Preloader/>
  }

  const onMainPhotoChange = (e) => {
      if (e.target.files.length) {
        props.savePhoto(e.target.files[0])
      }
  }

  return (
    <>
      <img className={style.avatar} onClick={editModeOn} src={props.profile.photos.large} alt="it's you"/>
      {props.isOwner && editMode && <div className={style.controlButtons}>
                                      <input type={"file"} id={"avatarFile"} onChange={onMainPhotoChange} className={style.inputFile}/>
                                      <label for={"avatarFile"}>choose a file</label>
                                      <button onClick={editModeOff} area-label={'close avatar edit'} className={style.close}>x</button>
                                    </div>}
    </>
  )
};

export default Avatar;