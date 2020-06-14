import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';
import PostReduxField from './PostField/PostField';
import { postDataType } from '../../../types/types'

type propsType = {
  postsData: Array<postDataType>

  addPost: (postField: string) => void
  deletePost: (id: string) => void
}

const Posts = (props: propsType) => {

let postListItem = [...props.postsData].reverse().map((p) => <Post postId={p.id} deletePost={props.deletePost} message={p.message} key={p.id}/>);

const addNewPost = (formData: any) => {
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