import React from 'react';
import style from './Avatar.module.css'
import Preloader from '../../../reusingComponent/animation/Preloader';

const Avatar = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <img className={style.avatar} src={props.profile.photos.large} alt="you's photo"/>
  )
};

export default Avatar;