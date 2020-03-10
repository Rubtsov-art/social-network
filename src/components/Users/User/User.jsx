import React from 'react';
import style from './User.module.css'
import defaultAvatar from '../../../assets/images/default-avatar.jpg'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';


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
                            ? <button onClick={() => { 
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'b819823f-20b4-4e7f-a854-8954cb168bf2'
                                    },
                                })
                                    .then((response) => {
                                        if (response.data.resultCode === 0) {
                                            props.removeFriend(u.id)
                                        }
                                    });
                                 }}>To enemy</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'b819823f-20b4-4e7f-a854-8954cb168bf2'
                                    },
                                })
                                    .then((response) => {
                                        if (response.data.resultCode === 0) {
                                            props.addFriend(u.id)
                                        }
                                    });
                            }}>To friend</button>}
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