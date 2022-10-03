import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Footer.module.css';
import Title from '../common/components/title/Title';

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={'Aliaksandr Astrautsou'}/>
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