import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';
import PostReduxField from './PostField/PostField';


const Posts = (props) => {

let postListItem = [...props.postsData].reverse().map((p) => <Post message={p.message} key={p.id}/>);

const addNewPost = (formData) => {
  props.addPost(formData.postField)
}

  return (
      <section className={style.post}>
          <PostReduxField onSubmit={addNewPost}/>
          <ul className={style.posts_list}>
          {postListItem}
          </ul>
      </section>
  )
};

export default Posts;