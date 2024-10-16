// src/Registro.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Registro = ({ onRegister }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cedula, setCedula] = useState('');
    const [direccion, setDireccion] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Crear un objeto con los datos del formulario
        const nuevoRegistro = { nombre, apellido, cedula, direccion, email, telefono };
        
        // Llama a la función onRegister para pasar los datos al componente padre
        onRegister(nuevoRegistro);

        // Redirigir a la página de listado después de enviar el formulario
        navigate('/services/ver'); // Cambia esto a la ruta que desees
    };

    return (
        <div className="container mt-4">
            <h2>Registro</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingresa tu nombre" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        required 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingresa tu apellido" 
                        value={apellido} 
                        onChange={(e) => setApellido(e.target.value)} 
                        required 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicCedula">
                    <Form.Label>Cédula</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingresa tu cédula" 
                        value={cedula} 
                        onChange={(e) => setCedula(e.target.value)} 
                        required 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicDireccion">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Ingresa tu dirección" 
                        value={direccion} 
                        onChange={(e) => setDireccion(e.target.value)} 
                        required 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Ingresa tu correo" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </Form.Group>

                <Form.Group controlId="formBasicTelefono">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control 
                        type="tel" 
                        placeholder="Ingresa tu teléfono" 
                        value={telefono} 
                        onChange={(e) => setTelefono(e.target.value)} 
                        required 
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className='mt-3'>
                    Enviar
                </Button>
            </Form>
        </div>
    );
};

export default Registro;