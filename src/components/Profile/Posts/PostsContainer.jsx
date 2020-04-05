import { actionCreatorAddPost,  deletePost } from '../../../redux/profileReducer';
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
    addPost: (formData) => {
      dispatch(actionCreatorAddPost(formData))
    },

    deletePost,
  })
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;