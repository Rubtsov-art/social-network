import React, { createRef } from 'react';
import style from './DialogsList.module.css'
import Dialog from './Dialog/Dialog';
import Login from '../../Login/Login';



const DialogsList = (props) => {

  let dialogListDataObj = props.messagesPage.dialogListData.map ( (d) => <Dialog link={d.link} key={d.id} user={d.user} />);

  let newDialog = React.createRef();

  let addInterlocutor = () => {
    props.addInterlocutor();
  };

  let changeDialogField = () => {
    let name = newDialog.current.value;
    props.changeInDialogList(name);
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