import React from 'react';
import style from './Messages.module.css'
import DialogsList from './DialogsList/DialogsList';
import MessageList from './MassageList/MessageList';


const Messages = (props) => {
  return (
    <section className={style.main_content}>
      <DialogsList messagesPage={props.state} dispatch={props.dispatch}/>
      <MessageList messageData={props.state.messageData}/>
    </section>
  )
};

export default Messages;