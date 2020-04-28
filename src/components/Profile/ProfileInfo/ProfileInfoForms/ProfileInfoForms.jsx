import React from 'react';
import style from './ProfileInfoForms.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input, Textarea } from '../../../FormControl/FormControl';
import { required } from '../../../../validators/validators';
import formsStyle from '../../../FormControl/FormControl.module.css';

const ProfileInfoForms = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.loginFormField}>
                <label> Full name:</label>
                    <Field component={Input} validate={[required]} type={'text'} placeholder={'Full name'} name={'fullName'}/>
            
                <label>Looking for a job:</label>
                    <Field component={Input} type={'checkbox'} name={'lookingForAJob'}/>
                
                <label> My skills:</label>
                    <Field component={Textarea} placeholder={'My skills'} name={'lookingForAJobDescription'}/>
            
                <label> About me:</label>
                    <Field component={Textarea} placeholder={'About me'} name={'aboutMe'}/>
            
                <p>Contacts: <span>{Object.keys(props.profile.contacts).map(c => {
                    return <div key={c}> 
                            <span>{c}:</span> <Field component={Input} placeholder={c} name={'contacts.' + c}/>
                            </div>
                })}</span></p>
                {props.error && <div className={formsStyle.invalidFormData}>{props.error}</div>}
                <button>Submit</button>
        </form>
    )
}

const ProfileInfoReduxForms = reduxForm ({
    form: 'profileData'
}) (ProfileInfoForms)

export default ProfileInfoReduxForms