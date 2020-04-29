import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../../validators/validators';
import { Textarea } from '../../../FormControl/FormControl';
import style from './PostField.module.css';

const maxLength300 = maxLengthCreator(300)

const PostField = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={style.formInput} component={Textarea} type={'text'} placeholder={'Write post'} name={'postField'} validate={[required, maxLength300]}/>
            <button className={style.submit}>add post</button>
        </form>
    )
};

const PostReduxField = reduxForm({form: 'post'})(PostField)



export default PostReduxField