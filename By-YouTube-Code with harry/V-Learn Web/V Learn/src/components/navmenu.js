import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/navmenu.css';
// import { Link } from 'react-router-dom'
// import Logo from '../Images/logo.png';


function Navmenu() {

    return (
        <div>
            <Navbar expand="lg" className='navmenudiv'>
                 <Navbar.Brand href="/">V Learn</Navbar.Brand>
                 {/* <img className='logo' src={Logo} alt='logo' /> */}
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="me-auto">
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="/aboutus">About Us</Nav.Link>
                     <Nav.Link href="/services">Services</Nav.Link>
                     <Nav.Link href="/contact">Contact</Nav.Link>
                     {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                       <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                       <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                       <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                       <NavDropdown.Divider />
                       <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                     </NavDropdown> */}
                   </Nav>
                 </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navmenu;
