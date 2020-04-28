import React from 'react';
import style from './MessageList.module.css'
import Message from './Message/Message';
import { Route } from 'react-router-dom';


const MessageList = (props) => {

  return (
    <section className={style.main_content}>
      <Route path='/messages/pasha' render={() => <Message text='Privet'/>} />
      <Route path='/messages/irina' render={() => <Message text='I am Irina'/>} />
      <Route path='/messages/vitia' render={() => <Message text='I am Vitia'/>} />
    </section>
  )
};

export default MessageList;