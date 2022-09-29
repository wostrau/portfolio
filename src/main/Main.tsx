import React from 'react';
import style from './Main.module.css';

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.greeting}>
                    <span>Hi there!</span>
                    <h1>I am<br/>Aliaksandr Astrautsou</h1>
                    <p>frontend developer</p>
                </div>
                <div className={style.picture}></div>
            </div>
        </div>
    );
};

export default Main;