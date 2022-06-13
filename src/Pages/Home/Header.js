import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className=''>
            <Navbar bg="light" expand="lg" className='container-fluid'>
                <Container fluid>
                    <Navbar.Brand href="#">Nazmul Hasan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Skills</Nav.Link>
                            <Nav.Link href="#">Projects</Nav.Link>
                            <Nav.Link href="#">Blog</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;