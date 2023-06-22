import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#/homead">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#/register">Register</Nav.Link>

                    </Nav>
                    
                </Container>
            </Navbar>
        </>
    )
}

export default Header
