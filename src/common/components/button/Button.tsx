import React from 'react';
import style from './Button.module.scss';

type PropsType = {
    text: string;
}

export const Button = (props: PropsType) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
            href={''}
            className={style.btn}
        >{props.text}</a>
    );
};