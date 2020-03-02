import React from 'react';
import style from './User.module.css'
import * as axios from 'axios';
import defaultAvatar from '../../../assets/images/default-avatar.jpg'


class User extends React.Component {

    componentDidMount(props) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currantPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
            this.props.setTotalItemsCountAC(response.data.totalCount)
        });
    };

    onPageChanged = (pageNumber) => {
        debugger;
        this.props.changeCurrantPageAC(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
        });
    };

    render = () => {
        let pagesLength = Math.ceil(this.props.totalItemsCount/this.props.pageSize);
        let pagesNumber = [];
        for (let p = 1; p <= pagesLength; p++) {
            pagesNumber.push(p);
        };
        let pagesNumberItem = pagesNumber.map((p) => <li><button onClick={() => {return (this.onPageChanged(p))}} className={this.props.currantPage === p && style.currantPage}>{p}</button></li>);

        return (
            <div>
                <ul className = {style.breadCramps}>
                    {pagesNumberItem}
                </ul>
                <ul>
                    {this.props.usersList.map((u) => <li key={u.id}>
                        <div>
                            <img alt='avatar' className={style.avatar} src={u.photos.small != null ? u.photos.small : defaultAvatar} />
                            {u.friend
                                ? <button onClick={() => { this.props.removeFriend(u.id) }}>To enemy</button>
                                : <button onClick={() => { this.props.addFriend(u.id) }}>To friend</button>}
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
}


export default User;