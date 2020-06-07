import React, { useState } from 'react'
import style from './Pagination.module.css'

type propsType = {
    totalItemsCount: number
    pageSize: number
    portionSize?: number
    currantPage: number
    onPageChanged: (pageNumber: number) => void
}

const Pagination: React.FC<propsType> = ({totalItemsCount, pageSize, portionSize = 10, onPageChanged, currantPage}) => {

    let pagesLength = Math.ceil(totalItemsCount / pageSize);

    let pagesNumber = [];

    for (let p = 1; p <= pagesLength; p++) {
        pagesNumber.push(p);
    };

    let portionCount = Math.ceil(pagesLength/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    let pagesNumberItem = pagesNumber   .filter((p)=> p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                                        .map((p) => <li><button onClick={() => { return (onPageChanged(p)) }} className={currantPage === p ? style.currantPage: style.page }>{p}</button></li>);


    return (
        <ul className={style.breadCramps}>
            {portionNumber > 1 && <button className={style.prev} onClick={()=>{setPortionNumber(portionNumber-1)}}>prev</button>}
            <ul className={style.pages}>{pagesNumberItem}</ul>
            {portionCount > portionSize && <button className={style.next} onClick={()=>{setPortionNumber(portionNumber+1)}}>next</button>}
        </ul>
    )
}

export default Pagination