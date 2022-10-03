import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
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