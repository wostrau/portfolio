import React from 'react';
import style from './Header.module.scss';
import {Navbar} from './navbar/Navbar';
import {BurgerNavbar} from './burgerNavbar/BurgerNavbar';

export const Header = () => {
    return (
        <div className={style.header}>
            <BurgerNavbar/>
        </div>
    );
};