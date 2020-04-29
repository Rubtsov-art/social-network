import React from 'react';
import style from './Message.module.css'


const Message = (props) => {

  return (
    <div>
      <p className={style.text}>{props.text}</p>
    </div>
  )
};

export default Message;