import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';

export const Skills = () => {
    return (
        <div
            id="Skills"
            className={style.skillsBlock}
        >
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'My Skills'}/>
                <div className={style.skills}>
                    <Skill
                        title={'HTML&CSS'}
                        description={'BLA-BLA'}
                    />
                    <Skill
                        title={'TYPESCRIPT'}
                        description={'BLA-BLA'}
                    />
                    <Skill
                        title={'REACT'}
                        description={'BLA-BLA'}
                    />
                    <Skill
                        title={'REDUX'}
                        description={'BLA-BLA'}
                    />
                </div>
            </div>
        </div>
    );
};