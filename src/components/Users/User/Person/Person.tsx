import React from 'react'
import style from './Person.module.css'
import { NavLink } from 'react-router-dom';
import defaultAvatar from '../../../../assets/images/default-avatar.png'
import { userType } from '../../../../types/types';

type propsType = {
    user: userType,
    isFollowingInProgress: Array<number>,
    createFriendship: (id: number) => void,
    deleteFriend: (id: number) => void
}

const Person = ({user, isFollowingInProgress, createFriendship, deleteFriend, ...props}: propsType) => {
    return (
        <>
            <div className={style.user}>
                        <NavLink to={'/profile/' + user.id}>
                            <img alt='avatar' className={style.avatar} src={user.photos.small != null ? user.photos.small : defaultAvatar} />
                        </NavLink>
                        {user.friend
                            ? <button className={style.friendButton} disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                                deleteFriend(user.id)
                            }}>To enemy</button>
                            : <button className={style.friendButton} disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                                createFriendship(user.id);
                            }}>To friend</button>}
                        <p className={style.info}>
                            <span>{user.name}</span>
                            <span>{user.status}</span>
                        </p>
                    </div>
        </>
    )
}

export default Person
