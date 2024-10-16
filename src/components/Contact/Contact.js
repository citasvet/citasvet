import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';
import contact1 from '../../assets/image/contact1.jpg'; // Asegúrate de que la ruta sea correcta
import contact2 from '../../assets/image/contact2.jpg'; // Asegúrate de que la ruta sea correcta

const Contact = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center text-primary">Contáctanos</h2>
            <p className="text-center">
                Si tienes alguna pregunta o comentario, no dudes en comunicarte con nosotros. Estamos aquí para ayudarte.
            </p>
            <br></br>
            <Row className="justify-content-center">
                <Col md={4} className="d-flex align-items-center justify-content-center">
                    {/* Imagen izquierda */}
                    <img src={contact1} alt="Descripción imagen izquierda" className="img-fluid" />
                </Col>
                
                <Col md={4}>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu nombre" required />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Ingresa tu correo electrónico" required />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" rows={10} placeholder="Escribe tu mensaje aquí..." required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Enviar Mensaje
                        </Button>
                    </Form>
                </Col>
                <Col md={4} className="d-flex align-items-center justify-content-center">
                    {/* Imagen derecha */}
                    <img src={contact2} alt="Descripción imagen derecha" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
