import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';


const Posts = (props) => {
let postListItem = props.postsData.map((p) => <Post message={p.message}/>);

let newPost = React.createRef();


let readPost = () => {
  props.addPost();
  props.changeInTextArea('');
};

let changePostField = () => {
  let text = newPost.current.value;
  props.changeInTextArea(text);
};

  return (
      <section className={style.post}>
          <div>
            <textarea ref={newPost} value={props.postFieldValue} onChange={changePostField} />
          </div>
          <button onClick={readPost}>Post</button>
          <ul className={style.posts_list}>
          {postListItem}
          </ul>
      </section>
  )
};

export default Posts;