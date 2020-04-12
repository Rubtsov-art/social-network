import React, { useState } from 'react'
import style from './Pagination.module.css'

const Pagination = (props) => {

    let pagesLength = Math.ceil(props.totalItemsCount / props.pageSize);

    let pagesNumber = [];

    for (let p = 1; p <= pagesLength; p++) {
        pagesNumber.push(p);
    };

    let portionCount = Math.ceil(pagesLength/props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    let pagesNumberItem = pagesNumber   .filter((p)=> p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                                        .map((p) => <li><button onClick={() => { return (props.onPageChanged(p)) }} className={props.currantPage === p && style.currantPage}>{p}</button></li>);


    return (
        <ul className={style.breadCramps}>
            {portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber-1)}}>prev</button>}
            {pagesNumberItem}
            {portionCount > props.portionSize && <button onClick={()=>{setPortionNumber(portionNumber+1)}}>next</button>}
        </ul>
    )
}

export default Pagination