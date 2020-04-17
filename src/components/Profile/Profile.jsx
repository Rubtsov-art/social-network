import React from 'react';
import style from './Profile.module.css'
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Avatar from './Avatar/Avatar';
import Preloader from '../../reusingComponent/animation/Preloader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

 
const Profile = (props) => {
  return (
    <section className={style.main_content}>
      <Avatar savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}/>
      <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
      {props.profile ? <ProfileInfo profile={props.profile}/> : <Preloader/>}
      <PostsContainer/>
    </section>
  )
};

export default Profile;