import React from 'react';
import style from './User.module.css'

import defaultAvatar from '../../../assets/images/default-avatar.jpg'


const User = (props) => {

    let pagesLength = Math.ceil(props.totalItemsCount / props.pageSize);

    let pagesNumber = [];

    for (let p = 1; p <= pagesLength; p++) {
        pagesNumber.push(p);
    };

    let pagesNumberItem = pagesNumber.map((p) => <li><button onClick={() => { return (props.onPageChanged(p)) }} className={props.currantPage === p && style.currantPage}>{p}</button></li>);
    return (
        <div>
            <ul className={style.breadCramps}>
                {pagesNumberItem}
            </ul>
            <ul>
                {props.usersList.map((u) => <li key={u.id}>
                    <div>
                        <img alt='avatar' className={style.avatar} src={u.photos.small != null ? u.photos.small : defaultAvatar} />
                        {u.friend
                            ? <button onClick={() => { props.removeFriend(u.id) }}>To enemy</button>
                            : <button onClick={() => { props.addFriend(u.id) }}>To friend</button>}
                    </div>
                    <div>
                        <span>
                            <p>{u.name}</p>
                            <p>{u.status}</p>
                        </span>
                        <span>
                            <p>{'u.location.city'}</p>
                            <p>{'u.location.country'}</p>
                        </span>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}




export default User;