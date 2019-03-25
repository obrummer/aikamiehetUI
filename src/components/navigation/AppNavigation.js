import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav, Dropdown, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/AppNavigation.css';

class AppNavigation extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand>
        Test A Song
        {/* <img
        src="/testasong4.png"
        width="90"
        height=""
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />   */}
        </Navbar.Brand>       
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Navigation          
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown><Link to="/">Home</Link></Dropdown>
            <Dropdown><Link to="/filetest">Test file</Link></Dropdown>
            <Dropdown><Link to="/humrecord">Test hum</Link></Dropdown>
            <Dropdown><Link to="/texttest">Test lyrics</Link></Dropdown>
            <Dropdown><Link to="/about">About</Link></Dropdown>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    );
  }
}

export default AppNavigation;
