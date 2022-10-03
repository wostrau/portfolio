import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Aliaksandr Astrautsou</h2>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                    <div className={style.socialIcon}></div>
                </div>
                <span className={style.copyright}>2022 All rights are reserved</span>
            </div>
        </div>
    );
};

export default Footer;