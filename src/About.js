import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import './About.css'
import Profile from "./img/Profile.png";

const About = () => {
    return (
        <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded ">
                <h4>Hi I'm <strong>&nbsp;Nazmul Hasan</strong></h4>
                <br />A passionate programmer. born and brought up in Bangladesh. I am a Mern   Stack Developer with React.js, Express.js, Node.js, and MongoDb as my tech stack.
                <br />
                In 2021, I successfully completed my Engineering with specialization in 'Computer Science and Engineering'.
                <br />
                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                <br />
                I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                 <div>
                    <a href="https://drive.google.com/file/d/1lARAL0NW_gZ4qCwh-U5tpq-S-_AiMqCV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/nazmul-2020" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/nazmul-hasan-bbb097170/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end border-0" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    );
};

export default About;