import React from 'react';
import style from './User.module.css'

const User = (props) => {
    if (props.usersList.length === 0){
        props.setUsers ( [
            { id: 1, friend: true, status: 'doma', avatar: 'https://avatanplus.com/files/resources/original/5a4bf99ec0fac160b8c71446.png', name: 'Pasha', location: {city: 'Ekaterinburg', country: 'Russia'} },
            { id: 2, friend: true, status: 'doma', avatar: 'https://avatanplus.com/files/resources/original/5a4bf99ec0fac160b8c71446.png', name: 'Irina', location: {city: 'Ekaterinburg', country: 'Russia'} },
            { id: 3, friend: true, status: 'doma', avatar: 'https://avatanplus.com/files/resources/original/5a4bf99ec0fac160b8c71446.png', name: 'Victor', location: {city: 'Ekaterinburg', country: 'Russia'} },
            { id: 4, friend: false, status: 'doma', avatar: 'https://avatanplus.com/files/resources/original/5a4bf99ec0fac160b8c71446.png', name: 'Anna', location: {city: 'Nursultan', country: 'Kazakhstan'} },
        ])
    }

    return (
        <ul>
            {props.usersList.map ((u) => <li key={u.id}>
                <div>
                    <img alt='avatar' className={style.avatar} src={u.avatar}/>
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
                        <p>{u.location.city}</p>
                        <p>{u.location.country}</p>
                    </span>
                </div>
            </li>)}
        </ul>
    )
};

export default User;