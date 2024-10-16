import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // Import your custom CSS file
import logo from '../../assets/image/logo.png'; // Adjust the path as necessary

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-cadetblue">
            <div className="container-fluid">
                <Link className="navbar-brand mx-auto d-flex align-items-center me-4" to="/">
                    <img 
                        src={logo} 
                        alt="Logo de la Empresa" 
                        width="70" 
                        height="70" 
                        className="d-inline-block align-top me-2"
                    />
                    PetWell
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Agendamiento de Citas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Sobre Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contactenos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;