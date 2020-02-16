import React from 'react';
import style from './DialogsList.module.css'
import Dialog from './Dialog/Dialog';


const DialogsList = (props) => {
  
  

  let dialogListDataObj = props.dialogListData.map ( (d) => <Dialog link={d.link} user={d.user} />);
  
  return (
    <ul className={style.dialog_list}>
      {dialogListDataObj}
    </ul>
  )
};

export default DialogsList;