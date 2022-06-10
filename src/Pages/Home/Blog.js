import React from 'react';
import {Card } from 'react-bootstrap';
import JavaScript from '../../img/blog/blog2.webp'
import Basic from '../../img/blog/blog3.webp'
import react from '../../img/blog/blog4.webp'

const Blog = () => {
    return (
        <div className='container my-5 '>
            <h1 className='text-center'>Blog</h1>
            <div className=' row mt-5 '>
                <div className=' col-12 col-md-6 col-lg-4 '>
                    <Card className='border-0' style={{}}>
                        <Card.Img variant="top" src={JavaScript} />
                        <Card.Body>
                            <Card.Title className='text-center'>Introduction to JavaScript</Card.Title>
                            <p className='text-justify'>
                                JavaScript is a scripting or programming language that allows you to implement complex features on web pages. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data.
                            </p>
                        </Card.Body>
                    </Card>
                </div>
                <div className=' col-12 col-md-6 col-lg-4 '>
                    <Card className='border-0' style={{}}>
                        <Card.Img variant="top" src={Basic} />
                        <Card.Body>
                            <Card.Title className='text-center'>Basic JavaScript you need to know</Card.Title>
                            <p className='text-justify'>
                                Today I will discuss with you some special topics of JavaScript. Since I am a new programmer and new blog writer,so please forgive all mistakes in writing.
                            </p>
                        </Card.Body>
                    </Card>
                </div>
                <div className=' col-12 col-md-6 col-lg-4 '>
                    <Card className='border-0' style={{}}>
                        <Card.Img variant="top" src={react} style={{height:180}} />
                        <Card.Body>
                            <Card.Title className='text-center'>10 Things you need to know in React</Card.Title>
                            <p className='text-justify'>
                                React is an open source, front end, declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
                            </p>
                        </Card.Body>
                    </Card>
                </div>

            </div>

        </div>
    );
};

export default Blog;