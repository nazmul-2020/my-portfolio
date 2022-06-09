import React from 'react';
import { Button } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='banner d-flex justify-content-center align-items-center '>
            <div>
                <h4>Hi I'm</h4>
                <h4>Nazmul Hasan</h4>
                <h4>Jr. Web Developer</h4>
                <Button href="https://drive.google.com/file/d/1lARAL0NW_gZ4qCwh-U5tpq-S-_AiMqCV/view?usp=sharing" target="_blank" variant="outline-light">My Resume</Button>
            </div>
        </div>
    );
};

export default Banner;