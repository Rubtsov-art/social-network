import React from 'react'
import style from './Pagination.module.css'

const Pagination = (props) => {

    let pagesLength = Math.ceil(props.totalItemsCount / props.pageSize);

    let pagesNumber = [];

    for (let p = 1; p <= pagesLength; p++) {
        pagesNumber.push(p);
    };

    let pagesNumberItem = pagesNumber.map((p) => <li><button onClick={() => { return (props.onPageChanged(p)) }} className={props.currantPage === p && style.currantPage}>{p}</button></li>);


    return (
        <ul className={style.breadCramps}>
            {pagesNumberItem}
        </ul>
    )
}

export default Pagination