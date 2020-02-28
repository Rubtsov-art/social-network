import React from 'react';
import style from './User.module.css'
import * as axios from 'axios';
import defaultAvatar from '../../../assets/images/default-avatar.jpg'

const User = (props) => {
    if (props.usersList.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
            props.setUsers (response.data.items)
        })
    }

    return (
        <ul>
            {props.usersList.map ((u) => <li key={u.id}>
                <div>
                    <img alt='avatar' className={style.avatar} src={u.photos.small != null ? u.photos.small : defaultAvatar}/>
                    {u.friend 
                    ? <button onClick={() => {props.removeFriend(u.id)}}>To enemy</button> 
                    : <button onClick={() => {props.addFriend(u.id)}}>To friend</button>}
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
    )
};

export default User;