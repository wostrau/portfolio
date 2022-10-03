import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
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

export default Skills;