import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Hire.module.css';
import Title from '../common/components/title/Title';

const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <Title title={'I\'m open for REMOTE job in EU'}/>
                <a href="" className={style.hireBtn}>To hire me!</a>
            </div>
        </div>
    );
};

export default Hire;