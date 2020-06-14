import { actionCreatorAddPost,  deletePost } from '../../../redux/profileReducer';
import Posts from './Posts';
import { connect } from 'react-redux';
import { appStateType } from '../../../redux/redux-store';
import { postDataType } from '../../../types/types';

type mapStatePropsType = {
  postsData: Array<postDataType>
  postFieldValue: string
}

type mapDispatchPropsType = {
  addPost: typeof actionCreatorAddPost,
  deletePost: (postId: string) => void
}

let mapStateToProps = (state: appStateType): mapStatePropsType => {
  return ({
    postsData: state.profilePage.postsData,
    postFieldValue: state.profilePage.postFieldValue
  });
};

const PostsContainer = connect(mapStateToProps,
                       {addPost: actionCreatorAddPost,
                        deletePost
                       })(Posts);

export default PostsContainer;