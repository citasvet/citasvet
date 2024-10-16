import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-primary text-white mt-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Sobre Nosotros</h5>
                        <p>Información sobre la empresa.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Enlaces</h5>
                        <ul className="list-unstyled">
                            <li><a href="/privacy" className="text-white">Política de Privacidad</a></li>
                            <li><a href="/terms" className="text-white">Términos y Condiciones</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contacto</h5>
                        <p>Email: info@tuempresa.com</p>
                    </Col>
                </Row>
                <div className="text-center p-3">
                    © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;