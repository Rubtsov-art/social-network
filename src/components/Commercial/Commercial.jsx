import React from 'react';
import style from './Commercial.module.css';

const Commercial = React.memo((props) => {
    return (
        <section className={style.commercial}>
            <article className={style.commercialBlock}>HERE CAN BE YOU'S COMMERCIAL</article>
        </section>
    )
});

export default Commercial