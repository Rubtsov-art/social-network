import React from 'react';
import style from './Message.module.css'


const Message = (props) => {

  return (
    <div>
      <p>{props.text}</p>
    </div>
  )
};

export default Message;