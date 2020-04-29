import React from 'react';
import style from './Post.module.css'

//{props.deletePost(props.postId)}

const Post = (props) => {
  return (
      <li className={style.post}>
          {props.message} <button className={style.deletePost} onClick={() =>{props.deletePost(props.postId)}} aria-label='delete'>x</button>
      </li>
  )
};

export default Post;