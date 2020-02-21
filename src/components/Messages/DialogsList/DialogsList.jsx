import React, { createRef } from 'react';
import style from './DialogsList.module.css'
import Dialog from './Dialog/Dialog';
import { actionCreatorAddInterlocutor, actionCreatorChangeInDialogList } from '../../../redax/messagesReducer';


const DialogsList = (props) => {

  let dialogListDataObj = props.messagesPage.dialogListData.map ( (d) => <Dialog link={d.link} user={d.user} />);

  let newDialog = React.createRef();

  let addInterlocutor = () => {
    props.dispatch(actionCreatorAddInterlocutor());
    props.dispatch(actionCreatorChangeInDialogList(''));
  };

  let changeDialogField = () => {
    let name = newDialog.current.value;
    props.dispatch(actionCreatorChangeInDialogList(name));
  };
  
  return (
    <div>
    <ul className={style.dialog_list}>
      {dialogListDataObj}
    </ul>
    <textarea ref={newDialog} value={props.postFieldValue} onChange={changeDialogField}/>
    <button onClick={addInterlocutor}>add new dialog</button>
    </div>
  )
};

export default DialogsList;