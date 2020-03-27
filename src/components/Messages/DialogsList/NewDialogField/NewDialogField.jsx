import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../../validators/validators'
import {Textarea} from '../../../FormControl/FormControl'

const maxLength30 = maxLengthCreator(30)

const NewDialogField = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength30]} name={'newInterlocutorName'}/>
            <button>add new dialog</button>
        </form>
    );
};

const NewDialogReduxField = reduxForm({form: 'newDialogForm'})(NewDialogField)

export default NewDialogReduxField