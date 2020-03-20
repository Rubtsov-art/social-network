import React from 'react';
import style from './Profile.module.css'
import PostsContainer from './Posts/PostsContainer';
import Avatar from './Avatar/Avatar';
import ProfileStatus from './ProfileStatus/ProfileStatus';


const Profile = (props) => {

  return (
    <section className={style.main_content}>
      <Avatar profile={props.profile}/>
      <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
      <PostsContainer store={props.store}/>
    </section>
  )
};

export default Profile;