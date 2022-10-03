import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Hire.module.css';

const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h2 className={style.title}>I'm open for REMOTE job in EU</h2>
                <a href="" className={style.hireBtn}>To hire me!</a>
            </div>
        </div>
    );
};

export default Hire;