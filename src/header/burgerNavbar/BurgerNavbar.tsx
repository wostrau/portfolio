import React, {useState} from 'react';
import style from './BurgerNavbar.module.scss';
import {Link} from 'react-scroll';

export const BurgerNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const onBurgerButtonHandler = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className={style.burgerNavbar}>
            <div className={isMenuOpen
                ? `${style.burgerNavbarItems} ${style.show}`
                : style.burgerNavbarItems
            }>
                <Link
                    activeClass={style.active}
                    to="Main"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Main</Link>
                <Link
                    activeClass={style.active}
                    to="Skills"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={style.active}
                    to="Projects"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass={style.active}
                    to="Contacts"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Contacts</Link>
            </div>
            <div
                className={style.burgerButton}
                onClick={onBurgerButtonHandler}
            ></div>
        </div>
    );
};
