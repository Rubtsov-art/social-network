import React, { createRef } from 'react';
import { actionCreatorAddInterlocutor, actionCreatorChangeInDialogList } from '../../../redux/messagesReducer';
import DialogsList from './DialogsList';

const DialogsListContainer = (props) => {

    let state = props.store.getState();
    let postFieldValue = state.messagesPage.postFieldValue;

    const addInterlocutor = () => {
        props.store.dispatch(actionCreatorAddInterlocutor());
        props.store.dispatch(actionCreatorChangeInDialogList(''));
    };

    const changeInDialogList = (name) => {
        props.store.dispatch(actionCreatorChangeInDialogList(name));
    }

    return (<DialogsList messagesPage={state.messagesPage} changeInDialogList={changeInDialogList} addInterlocutor={addInterlocutor} postFieldValue={postFieldValue} />)
}

export default DialogsListContainer;