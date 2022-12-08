import React from 'react';
import style from './Contacts.module.scss';
import Title from '../common/components/title/Title';

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <Title title={'Contacts'}/>
                <form className={style.form}>
                    <input
                        type="text"
                        placeholder={'Name'}
                        className={style.formArea}
                    />
                    <input
                        type="text"
                        placeholder={'e-mail'}
                        className={style.formArea}
                    />
                    <textarea
                        placeholder={'message'}
                        className={style.messageArea}
                    />
                    <button
                        type="submit"
                    >SEND MESSAGE
                    </button>
                </form>
            </div>
        </div>
    );
};