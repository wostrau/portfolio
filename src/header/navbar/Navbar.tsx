import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <a href={''}>Main</a>
            <a href={''}>Skills</a>
            <a href={''}>Projects</a>
            <a href={''}>Contacts</a>
        </div>
    );
};

export default Navbar;