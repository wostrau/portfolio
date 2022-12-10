import React from 'react';
import style from './Contacts.module.scss';
import Title from '../common/components/title/Title';
// @ts-ignore
import Fade from 'react-reveal/Fade';

export const Contacts = () => {
    return (
        <div
            id="Contacts"
            className={style.contactsBlock}
        >
            <div className={style.container}>
                <Title title={'Contacts'}/>
                <Fade right>
                    <form className={style.form}>
                        <input
                            type="text"
                            placeholder={'name'}
                            className={style.formArea}
                        />
                        <input
                            type="text"
                            placeholder={'email'}
                            className={style.formArea}
                        />
                        <textarea
                            placeholder={'your message'}
                            className={style.messageArea}
                        />
                        <button
                            type="submit"
                        >SEND MESSAGE
                        </button>
                    </form>
                </Fade>
            </div>
        </div>
    );
};