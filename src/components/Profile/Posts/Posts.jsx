import React from 'react';
import style from './Posts.module.css'
import Post from './Post/Post';

const Posts = (props) => {
  
let postListItem = props.profilePage.postsData.map((p) => <Post message={p.message}/>);

let newPost = React.createRef();


let readPost = () => {
  props.addPost();
  props.changeInTextarea('')
};

let changePostField = () => {
  let text = newPost.current.value;
  props.changeInTextarea(text)
};

  return (
      <section className={style.post}>
          <div>
            <textarea ref={newPost} value= {props.profilePage.postFieldValue} onChange={changePostField} />
          </div>
          <button onClick={readPost}>Post</button>
          <ul className={style.posts_list}>
          {postListItem}
          </ul>
      </section>
  )
};

export default Posts;