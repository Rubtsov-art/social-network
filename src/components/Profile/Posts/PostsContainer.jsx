import React from 'react';
import { actionCreatorAddPost, actionCreatorChangeInTextarea } from '../../../redux/profileReducer';
import Posts from './Posts';

const PostsContainer = (props) => {

  let state = props.store.getState();
  let postsData = state.profilePage.postsData;
  let postFieldValue = state.profilePage.postFieldValue;
  console.log(postFieldValue);


  let addPost = () => {
    props.store.dispatch(actionCreatorAddPost());
    props.store.dispatch(actionCreatorChangeInTextarea(''));
  };

  let changeInTextArea = (text) => {
    props.store.dispatch(actionCreatorChangeInTextarea(text));
  };

  return (<Posts postsData={postsData} addPost={addPost} changeInTextArea={changeInTextArea} postFieldValue={postFieldValue} />)

};

export default PostsContainer;