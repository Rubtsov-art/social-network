import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
  return (
      <li className={style.post}>
          {props.message} <button onClick={() => {props.deletePost(props.postId)}} aria-label='delete'>delete</button>
      </li>
  )
};

export default Post;