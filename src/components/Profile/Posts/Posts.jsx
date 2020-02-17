import React from 'react';
import style from './Posts.module.css'
import Post from './Post/Post';

const Posts = (props) => {
  
let postListItem = props.postNumber.postsData.map((p) => <Post message={p.message}/>);

let newPost = React.createRef();

let addPost = () => {
  alert(newPost.current.value)
};

  return (
      <section className={style.post}>
          <div>
            <textarea ref={newPost}></textarea>
          </div>
          <button onClick={addPost}>Post</button>
          <ul className={style.posts_list}>
          {postListItem}
          </ul>
      </section>
  )
};

export default Posts;