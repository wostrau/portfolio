import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Projects.module.css';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import img4project from '../assets/image/forProject.png';

const Projects = () => {
    const todolistImg = {
        backgroundImage: `url(${img4project})`
    };

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'My Projects'}/>
                <div className={style.projects}>
                    <Project title={'Todolist'} style={todolistImg} description={'bla-bla'}/>
                    <Project title={'Social Network'} style={todolistImg}
                             description={'bla-bla bla-bla bla-bla bla-bla bla-bla bla-bla bla-bla bla-bla bla-bla bla-bla bla-bla bla-bla bla-bla'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;