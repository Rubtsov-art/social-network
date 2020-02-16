import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
  return (
      <li className={style.post}>
          {props.message}
      </li>
  )
};

export default Post;