// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Registro from './Registro';
import Home from './Home';
import AboutUs from './AboutUs';
import VerUsuarios from './VerUsuario'; // Asegúrate de que este componente exista
import Contacto from './Contacto'; // Importa el nuevo componente Contacto

const App = () => {
    const [registros, setRegistros] = useState([]);

    const handleRegister = (nuevoRegistro) => {
        setRegistros([...registros, nuevoRegistro]);
    };

    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="container mt-4">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/registro" element={<Registro onRegister={handleRegister} />} />
                        <Route path="/services/ver" element={<VerUsuarios registros={registros} />} />
                        {/* Ruta para contacto */}
                        <Route path="/contact" element={<Contacto />} /> {/* Agrega esta línea */}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;