import React from 'react';
import html from '../../../img/skills/html-5.svg'
import css from '../../../img/skills/css3.svg'
import js from '../../../img/skills/javascript.svg'
import boot from '../../../img/skills/bootstrap-4.svg'
import react from '../../../img/skills/react.svg'
import router from '../../../img/skills/react-router.svg'
import node from '../../../img/skills/nodejs.svg'
import express from '../../../img/skills/express.svg'
import mongodb from '../../../img/skills/mongodb.svg'
import git from '../../../img/skills/git-icon.svg'
import netlify from '../../../img/skills/netlify.svg'
import firebase from '../../../img/skills/firebase.svg'
import heroku from '../../../img/skills/heroku.svg'
import './Skills.css'

const Skill = () => {
    return (
        <div className='container '>
            <h1 className='text-center'>My Skills</h1>
            <div className='d-flex justify-content-between align-items-center w-75 mx-auto mt-5'>
                <div className='skill'>
                    <div>
                        <img src={html} alt="" />
                    </div>
                    <p className='text-center'>Html</p>
                </div>
                <div className='skill'>
                    <div>
                        <img src={css} alt="" />
                    </div>
                    <p className='text-center'>Css</p>
                </div>
                <div className='skill'>
                    <div>
                        <img src={boot} alt="" />
                    </div>
                    <p className='text-center'>Bootstrap</p>
                </div>
                <div className='skill'>
                    <div>
                        <img src={js} alt="" />
                    </div>
                    <p className='text-center'>JavaScript</p>
                </div>
                <div className='skill'>
                    <div>
                        <img src={react} alt="" />
                    </div>
                    <p className='text-center'>React JS</p>
                </div>
                <div className='skill'>
                    <div>
                        <img src={router} alt="" />
                    </div>
                    <p className='text-center'>React Router</p>
                </div>
                <div className='skill'>
                    <div>
                        <img src={node} alt="" />
                    </div>
                    <p className='text-center'>Node.JS</p>
                </div>
                <div className='skill'>
                    <div>
                        <img src={express} alt="" />
                    </div>
                    <p className='text-center'>Express.js</p>
                </div>
                <div className='skill'>
                    <div>
                        <img src={mongodb} alt="" />
                    </div>
                    <p className='text-center'>MongoDB</p>
                </div>
            </div>
            <div className='d-flex justify-content-between align-items-center w-25 mx-auto'>
                <div className='skill'>
                    <div className=''>
                        <img src={git} alt="" />
                    </div>
                    <p className='text-center'>GitHub</p>
                </div>
                <div className='skill'>
                    <div className=''>
                        <img src={netlify} alt="" />
                    </div>
                    <p className='text-center'>Netlify</p>
                </div>
                <div className='skill'>
                    <div className=''>
                        <img src={firebase} alt="" />
                    </div>
                    <p className='text-center mt-2'>Firebase</p>
                </div>
                <div className='skill'>
                    <div className=''>
                        <img src={heroku} alt="" />
                    </div>
                    <p className='text-center'>Heroku</p>
                </div>
            </div>
        </div>
    );
};

export default Skill;