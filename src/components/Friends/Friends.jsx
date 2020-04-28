import React from 'react';
import style from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = React.memo(({friends}) => {
   let friendName = friends.map ((el) => <Friend key={el.id} friendName={el.name}/>);

    return (
        <section className={style.friends}>
            <h3 className={style.listName}>FRIENDS LIST</h3>
            <ul className={style.list}>
                {friendName}
            </ul>
        </section>
    )
});

export default Friends