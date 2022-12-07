import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Contacts.module.scss';
import Title from '../common/components/title/Title';

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
                <form className={style.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                    <button type="submit" className={style.submitBtn}>SEND</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;