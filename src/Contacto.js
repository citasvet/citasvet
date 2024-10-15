// src/Contacto.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el envío del formulario
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Mensaje:", mensaje);
        
        // Limpiar los campos después de enviar
        setNombre('');
        setEmail('');
        setMensaje('');
    };

    return (
        <Container className="mt-4">
            <h2>Contacto</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
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
                    </Col>
                </Row>

                <Form.Group controlId="formBasicMessage" className="mt-3">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={4} 
                        placeholder="Escribe tu mensaje aquí..." 
                        value={mensaje} 
                        onChange={(e) => setMensaje(e.target.value)} 
                        required 
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className='mt-3'>
                    Enviar
                </Button>
            </Form>
        </Container>
    );
};

export default Contacto;