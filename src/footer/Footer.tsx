import React from 'react';
import style from './Footer.module.scss';
import Title from '../common/components/title/Title';
import img4project from '../assets/image/forProject.png';

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <Title title={'Aliaksandr Astrautsou'}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={img4project} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={img4project} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={img4project} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            <img src={img4project} alt=""/>
                        </a>
                    </div>
                </div>
                <span className={style.copyright}>2022 All Rights Reserved</span>
            </div>
        </div>
    );
};