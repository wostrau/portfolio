import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Projects.module.css';
import Project from './project/Project';

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={'Todolist'} description={'bla-bla'}/>
                    <Project title={'Social Network'} description={'bla-bla'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;