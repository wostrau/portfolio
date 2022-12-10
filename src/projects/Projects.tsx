import React from 'react';
import style from './Projects.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import img4project from '../assets/image/forProject.png';

export const Projects = () => {
    const todolistImg = {
        backgroundImage: `url(${img4project})`
    };

    return (
        <div
            id={'Projects'}
            className={style.projectsBlock}
        >
            <div className={style.container}>
                <Title title={'My Projects'}/>
                <div className={style.projects}>
                    <Project
                        title={'Todolist'}
                        style={todolistImg}
                        description={'bla-bla'}/>
                    <Project
                        title={'Social Network'}
                        style={todolistImg}
                        description={'bla-bla'}/>
                </div>
            </div>
        </div>
    );
};