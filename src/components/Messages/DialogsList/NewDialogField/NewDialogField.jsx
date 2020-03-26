import React from 'react'
import { Field, reduxForm } from 'redux-form'

const NewDialogField = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'input' } name={'newInterlocutorName'}/>
            <button>add new dialog</button>
        </form>
    );
};

const NewDialogReduxField = reduxForm({form: 'newDialogForm'})(NewDialogField)

export default NewDialogReduxField