import React from 'react';
import style from './Avatar.module.css'
import Preloader from '../../../reusingComponent/animation/Preloader';

const Avatar = (props) => {

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
      <img className={style.avatar} src={props.profile.photos.large} alt="you's photo"/>
      {props.isOwner && <input type={"file"} onChange={onMainPhotoChange}/>}
    </>
  )
};

export default Avatar;