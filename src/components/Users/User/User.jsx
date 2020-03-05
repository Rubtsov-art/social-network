import React from 'react';
import style from './User.module.css'
import defaultAvatar from '../../../assets/images/default-avatar.jpg'
import { NavLink } from 'react-router-dom';


const User = (props) => {

    let pagesLength = Math.ceil(props.totalItemsCount / props.pageSize);

    let pagesNumber = [];

    for (let p = 1; p <= pagesLength; p++) {
        pagesNumber.push(p);
    };

    let pagesNumberItem = pagesNumber.map((p) => <li><button onClick={() => { return (props.onPageChanged(p)) }} className={props.currantPage === p && style.currantPage}>{p}</button></li>);
    return (
        <>  
            <ul>
                {props.usersList.map((u) => <li key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img alt='avatar' className={style.avatar} src={u.photos.small != null ? u.photos.small : defaultAvatar} />
                        </NavLink>
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
            <ul className={style.breadCramps}>
                {pagesNumberItem}
            </ul>
        </>
    )
}




export default User;