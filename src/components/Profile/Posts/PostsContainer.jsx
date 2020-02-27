import React from 'react';
import { actionCreatorAddPost, actionCreatorChangeInTextarea } from '../../../redux/profileReducer';
import Posts from './Posts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return ({
    postsData: state.profilePage.postsData,
    postFieldValue: state.profilePage.postFieldValue,
  });
};

let mapDispatchToProps = (dispatch) => {
  return ({
    addPost: () => {
      dispatch(actionCreatorAddPost())
      dispatch(actionCreatorChangeInTextarea(''))
    },
    changeInTextArea: (text) => {
      dispatch(actionCreatorChangeInTextarea(text))
    }
  })
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;