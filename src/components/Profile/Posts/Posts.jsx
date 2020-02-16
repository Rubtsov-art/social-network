import React from 'react';
import style from './Posts.module.css'
import Post from './Post/Post';

const Posts = (props) => {
  
let postListItem = props.postNumber.postsData.map((p) => <Post message={p.message}/>)

  return (
      <section className={style.post}>
          <ul className={style.posts_list}>
          {postListItem}
          </ul>
      </section>
  )
};

export default Posts;