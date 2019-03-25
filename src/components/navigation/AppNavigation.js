import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav, Dropdown, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/AppNavigation.css';

class AppNavigation extends Component {
  render() {
    return (
      <Container>
      <Navbar expand="lg">
        <Navbar.Brand>
              
        <img
        src="/tunesterr.png"
        width="120"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />  
        </Navbar.Brand>   
        <Dropdown alignRight>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Navigation          
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown><Link to="/">Home</Link></Dropdown>
            <Dropdown><Link to="/filetest">Test file</Link></Dropdown>
            <Dropdown><Link to="/humrecord">Test hum</Link></Dropdown>
            <Dropdown><Link to="/texttest">Test lyrics</Link></Dropdown>
            <Dropdown><Link to="">About</Link></Dropdown>
          </Dropdown.Menu>
        </Dropdown>
        
      </Navbar>
      </Container>
    );
  }
}

export default AppNavigation;
