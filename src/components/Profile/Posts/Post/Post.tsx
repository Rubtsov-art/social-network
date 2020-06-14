import React from 'react';
import style from './Post.module.css'

type propsType = {
  message: string
  postId: string

  deletePost: (id: string) => void
}

const Post = (props: propsType) => {
  return (
      <li className={style.post}>
          {props.message} <button className={style.deletePost} onClick={() =>{props.deletePost(props.postId)}} aria-label='delete'>x</button>
      </li>
  )
};

export default Post;