import React from 'react';
import style from './Main.module.scss';
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';

const particlesOptions = {
    particles: {
        number: {
            value: 80,
            destiny: {
                enable: true,
                value_area: 800
            }
        }
    }
};

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <Particles
                className={style.particles}
                params={particlesOptions}
            />
            <Fade top>
                <div className={style.container}>
                    <div className={style.greeting}>
                        <span>Hi there!</span>
                        <span>I am Aliaksandr<span>Astrautsou</span></span>
                        <h1>frontend developer</h1>
                    </div>
                    <div className={style.picture}>
                        <div className={style.image}></div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};