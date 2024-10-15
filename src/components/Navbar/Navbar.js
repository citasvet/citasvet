// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/image/logo.png'; // Adjust the path according to where your image is located
import './Navbar.css';

const CustomNavbar = () => {
    return (
        <Navbar expand="lg" variant="dark" className="bg-primary">
            <Navbar.Brand as={Link} to="/" className='mx-auto d-flex align-items-center' >
                <img 
                    src={logo} 
                    alt="Logo de la Empresa" 
                    width="70" 
                    height="70" 
                    className="d-inline-block align-top me-2"
                />
                PetWell
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/home" >Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/aboutus">Sobre nosotros</Nav.Link>
                    <NavDropdown title="Agendamiento de citas" id="basic-nav-dropdown">
                        {/* Change this link to point to /registro */}
                        <NavDropdown.Item as={Link} to="/registro">Registro de Usuario</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/services/ver">Usuarios Registrados</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/services/mascotas">Mascotas Registradas</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;