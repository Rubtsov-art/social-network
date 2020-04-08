import React from 'react'
import style from './Person.module.css'
import { NavLink } from 'react-router-dom';
import defaultAvatar from '../../../../assets/images/default-avatar.jpg'

const Person = ({user, isFollowingInProgress, createFriendship, deleteFriend, ...props}) => {
    return (
        <>
            <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img alt='avatar' className={style.avatar} src={user.photos.small != null ? user.photos.small : defaultAvatar} />
                        </NavLink>
                        {user.friend
                            ? <button disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                                deleteFriend(user.id)
                            }}>To enemy</button>
                            : <button disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                                createFriendship(user.id);
                            }}>To friend</button>}
                    </div>
                    <div>
                        <span>
                            <p>{user.name}</p>
                            <p>{user.status}</p>
                        </span>
                        <span>
                            <p>{'user.location.city'}</p>
                            <p>{'user.location.country'}</p>
                        </span>
                    </div>
        </>
    )
}

export default Person
