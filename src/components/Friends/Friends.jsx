import React from 'react';
import style from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

   let friendName = props.store.getState().friendsList.friends.map ((el) => <Friend friendName={el.name}/>);

    return (
        <section className={style.friends}>
            <ul>
                {friendName}
            </ul>
        </section>
    )
};

export default Friends