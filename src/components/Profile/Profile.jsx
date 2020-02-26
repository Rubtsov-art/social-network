import React from 'react';
import style from './Profile.module.css'
import PostsContainer from './Posts/PostsContainer';
import Avatar from './Avatar/Avatar';


const Profile = (props) => {

  return (
    <section className={style.main_content}>
      <Avatar />
      <PostsContainer store={props.store}/>
    </section>
  )
};

export default Profile;