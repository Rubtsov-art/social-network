import React from 'react';
import { reduxForm, Field } from 'redux-form';

const PostField = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'input'} type={'text'} name={'postField'}/>
            <button>add post</button>
        </form>
    )
};

const PostReduxField = reduxForm({form: 'post'})(PostField)



export default PostReduxField