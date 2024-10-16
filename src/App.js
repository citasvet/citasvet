// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
//import NavbarTabs from './components/Menuregis/NavbarTabs'; // Componente para Agendamiento de citas
import Register from './components/Register/Register'; // Componente para Registro
import ListUsers from './components/ListUsers/ListUsers'; // Componente para Usuarios Registrados
import ListPets from './components/ListPets/ListPets'; // Componente para Mascotas Registradas
import Home from './components/Home/Home'; // Componente para la página de inicio
import About from './components/About/About'; // Componente para "Sobre nosotros"
import Contact from './components/Contact/Contact'; // Componente para "Contactenos"
import './App.css';
import MenuRegis from './components/Menuregis/Menuregis';

const App = () => {
    return (
        <Router>
            <div className="App">

                <Navbar />
                
                <div className="container mt-4">
                    <Routes>
                        <Route path="/" element={<Home />} />  {/*Página de inicio */}
                        <Route path="/about" element={<About />} />  {/* Página "Sobre nosotros" */}
                        <Route path="/contact" element={<Contact />} />  {/* Página "Sobre nosotros" */}
                        <Route path="/services" element={<MenuRegis />} />  {/*Componente para "Agendamiento de citas" */}
                        
                        {/* Rutas para el segundo menú */}
                        <Route path="/register" element={<Register />} /> {/* Componente para Registro */}
                        <Route path="/usuarios"  element={<ListUsers />} /> {/* Componente para Usuarios Registrados */}
                        <Route path="/mascotas" element={<ListPets />} /> {/* Componente para Mascotas Registradas */}
                    </Routes>
                </div>

                <Footer />
                
            </div>
        </Router>
    );
};

export default App;