import React from 'react';
import style from './User.module.css'
import Person from './Person/Person'
import Pagination from '../../../reusingComponent/Pagination/Pagination';
import { userType } from '../../../types/types';

type propsType = {
    usersList: Array<userType>
    isFollowingInProgress: Array<number>
    createFriendship: (id: number) => void
    deleteFriend: (id: number) => void
    totalItemsCount: number
    portionSize?: number
    pageSize: number
    onPageChanged: (page: number) => void
    currantPage: number
}

const User: React.FC<propsType> = ({usersList,
              isFollowingInProgress,
              createFriendship,
              deleteFriend,
              totalItemsCount,
              portionSize,
              pageSize,
              onPageChanged,
              currantPage}) => {
    return (
        <>
            <ul className={style.list}>
                {usersList.map((u) => <li key={u.id}>
                    <Person user={u} isFollowingInProgress={isFollowingInProgress} createFriendship={createFriendship} deleteFriend={deleteFriend}/>
                </li>)}
            </ul>
            <Pagination totalItemsCount={totalItemsCount} portionSize={portionSize} pageSize={pageSize} onPageChanged={onPageChanged} currantPage={currantPage} />
        </>
    )
}




export default User;