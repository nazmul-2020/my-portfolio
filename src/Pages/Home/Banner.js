import React from 'react';
import { Button } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='banner d-flex justify-content-center align-items-center text-center '>
            <div>
                <h3>Hi I'm</h3>
                <h3>Nazmul Hasan</h3>
                <h3>Jr. <span>Web Developer</span></h3>
                <Button href="https://drive.google.com/file/d/1lARAL0NW_gZ4qCwh-U5tpq-S-_AiMqCV/view?usp=sharing" target="_blank" variant="outline-light" className='mt-2'>My Resume</Button>
            </div>
        </div>
    );
};

export default Banner;