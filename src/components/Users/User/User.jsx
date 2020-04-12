import React from 'react';
import style from './User.module.css'
import Person from './Person/Person'
import Pagination from '../../../reusingComponent/Pagination/Pagination';


const User = (props) => {
    return (
        <>
            <ul>
                {props.usersList.map((u) => <li key={u.id}>
                    <Person user={u} isFollowingInProgress={props.isFollowingInProgress} createFriendship={props.createFriendship} deleteFriend={props.deleteFriend}/>
                </li>)}
            </ul>
            <Pagination totalItemsCount={props.totalItemsCount} portionSize={props.portionSize} pageSize={props.pageSize} onPageChanged={props.onPageChanged} currantPage={props.currantPage} />
        </>
    )
}




export default User;