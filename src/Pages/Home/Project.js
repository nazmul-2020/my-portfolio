import React from 'react';
import { Card, NavLink } from 'react-bootstrap';
import dental from '../../img/project/dentalcare-fdc83.web.app.jpeg'
import bike from '../../img/project/bike-gallery-8ee18.web.app.jpeg'
import laptop from '../../img/project/laptop-parts-source.web.app.jpeg'
import './Project.css'

const Project = () => {
    return (
        <div className='container '>
            <h2 className='text-center'> Project </h2>
            <div className='row mt-5'>
                <div className=' col-12 col-md-6 col-lg-4 '>
                    <a className='text-decoration-none color' href="https://laptop-parts-source.web.app/" target="_blank">
                    <Card className='border-0' style={{}}>
                        <Card.Img variant="top" src={laptop} style={{ height: 500 }} />
                        <Card.Body>
                            <Card.Title className='text-center'>Laptop Parts Source</Card.Title>
                            <p className='text-justify'>
                                Authentication manufacturing service business purposes.
                            </p>
                        </Card.Body>
                    </Card>
                    </a>
                </div>
                <div className=' col-12 col-md-6 col-lg-4 '>
                    <a className='text-decoration-none color' href="https://bike-gallery-8ee18.web.app/" target="_blank">
                        <Card className='border-0' style={{}}>
                            <Card.Img variant="top" src={bike} style={{ height: 500 }} />
                            <Card.Body>
                                <Card.Title className='text-center'>Bike Gallery</Card.Title>
                                <p className='text-justify'>Authentication responsive warehouse management business purposes</p>
                            </Card.Body>
                        </Card>
                    </a>
                </div>
                <div className=' col-12 col-md-6 col-lg-4 '>
                    <a className='text-decoration-none color' href="https://dentalcare-fdc83.web.app/" target="_blank">
                        <Card className='border-0' style={{}}>
                            <Card.Img variant="top" src={dental} style={{}} />
                            <Card.Body>
                                <Card.Title className='text-center'> Dental Care Center</Card.Title>
                                <p className='text-justify'>Authentication responsive inventory business purposes</p>
                            </Card.Body>
                        </Card>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;