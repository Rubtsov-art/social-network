import React from 'react';
import style from './Messages.module.css'
import DialogsListContainer from './DialogsList/DialogsListContainer';
import MessageList from './MassageList/MessageList';


const Messages = (props) => {

  return (
    <section className={style.main_content}>
      <DialogsListContainer />
      <MessageList messageData={props.messageData}/>
    </section>
  )
};

export default Messages;