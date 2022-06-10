import React from 'react';
import { Button } from 'react-bootstrap';
import Typical from 'react-typical';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='banner d-flex justify-content-center align-items-center text-center '>
            <div>
                <h3>Hi I'm</h3>
                <h3>Nazmul Hasan</h3>
                <h3>Jr. <span className='text-warning'>
                    <Typical
                        loop={Infinity}
                        wrapper="h3"
                        steps={[
                            'Web Developer.', 2000,
                            'Frontend Developer.', 2000,
                            'React Developer.', 2000,
                            'JavaScript Developer.', 2000,
                        ]}
                    />
                </span></h3>
                <Button href="https://drive.google.com/file/d/1lARAL0NW_gZ4qCwh-U5tpq-S-_AiMqCV/view?usp=sharing" target="_blank" variant="outline-light" className='mt-2'>My Resume</Button>
            </div>
        </div>
    );
};

export default Banner;