import React from 'react';
import style from './Profile.module.css'
import Posts from './Posts/Posts';
import Avatar from './Avatar/Avatar';


const Profile = (props) => {

  return (
    <section className={style.main_content}>
      <Avatar />
      <Posts profilePage={props.state} dispatch = {props.dispatch}/>
    </section>
  )
};

export default Profile;