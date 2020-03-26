import React, { createRef } from 'react';
import style from './DialogsList.module.css'
import Dialog from './Dialog/Dialog';
import NewDialogField from './NewDialogField/NewDialogField';



const DialogsList = (props) => {

  let dialogListDataObj = props.messagesPage.dialogListData.map ( (d) => <Dialog link={d.link} key={d.id} user={d.user} />);

  let newDialog = React.createRef();

  const onSubmit = (newDialog) => {
    props.addInterlocutor(newDialog.newInterlocutorName)
  }
  
  return (
    <div>
    <ul className={style.dialog_list}>
      {dialogListDataObj}
    </ul>
    <NewDialogField onSubmit={onSubmit}/>
    </div>
  )
};

export default DialogsList;