import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/image/logo.png'; // Ajusta la ruta si es necesario
import './Navbar.css';

const CustomNavbar = () => {
    return (
        <Navbar expand="lg" variant="dark" className="bg-primary">
            <Navbar.Brand as={Link} to="/" className='d-flex align-items-center mx-auto text-white'>
                <img 
                    src={logo} 
                    alt="Logo de la Empresa" 
                    width="70" 
                    height="70" 
                    className="d-inline-block align-top me-2"
                />
                <span className="ms-2">PetWell</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home" className="text-white">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/aboutus" className="text-white">Sobre nosotros</Nav.Link>
                    <NavDropdown title="Agendamiento de citas" id="basic-nav-dropdown" className="text-white">
                        <NavDropdown.Item as={Link} to="/registro">Registro de Usuario</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/services/ver">Usuarios Registrados</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/services/mascotas">Mascotas Registradas</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contact" className="text-white">Contacto</Nav.Link>
                    <Button 
                        as={Link} 
                        to="/login" 
                        variant="outline-light" 
                        className="ms-3"
                    >
                        Inicio de Sesión
                    </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
