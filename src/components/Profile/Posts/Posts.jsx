import React from 'react';
import style from './Posts.module.css';
import Post from './Post/Post';
import PostReduxField from './PostField/PostField';


const Posts = (props) => {
let postListItem = props.postsData.map((p) => <Post message={p.message} key={p.id}/>);

let newPost = React.createRef();


// let readPost = () => {
//   props.addPost();
//   props.changeInTextArea('');
// };

// let changePostField = () => {
//   let text = newPost.current.value;
//   props.changeInTextArea(text);
// };

const addNewPost = (formData) => {
  props.addPost(formData.postField)
}

  return (
      <section className={style.post}>
          {/* <div>
            <textarea ref={newPost} value={props.postFieldValue} onChange={changePostField} />
          </div>
          <button onClick={readPost}>Post</button> */}
          <PostReduxField onSubmit={addNewPost}/>
          <ul className={style.posts_list}>
          {postListItem}
          </ul>
      </section>
  )
};

export default Posts;