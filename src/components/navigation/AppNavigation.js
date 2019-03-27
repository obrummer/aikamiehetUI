import React, { Component } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/AppNavigation.css';

class AppNavigation extends Component {
    render() {
        return (
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Navbar.Brand>
                        <Link to="/">
                            <img src="/tunesterr.png" width="120" height="50" className="d-inline-block align-top" alt="React Bootstrap logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Link className="custom-nav-link" to="/filetest">
                                <Badge variant="secondary">Test File</Badge>
                            </Link>
                            <Link className="custom-nav-link" to="/humrecord">
                                <Badge variant="secondary">Test Hum</Badge>
                            </Link>
                            <Link className="custom-nav-link" to="/texttest">
                                <Badge variant="secondary">Test Lyrics</Badge>
                            </Link>
                            <Link className="custom-nav-link" to="/about">
                                <Badge variant="secondary">About</Badge>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default AppNavigation;
