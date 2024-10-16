import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-cadetblue text-white mt-5" style={{ paddingTop: '30px' }}>
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Sobre Nosotros</h5>
                        <p className="text-white" style={{ textAlign: 'center' }}>Información sobre PetWell.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Enlaces</h5>
                        <ul className="list-unstyled">
                            <li style={{ textAlign: 'center' }}><a href="/privacy" className="text-white">Política de Privacidad</a></li>
                            <li style={{ textAlign: 'center' }}><a href="/terms" className="text-white">Términos y Condiciones</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contacto</h5>
                        <p className="text-white" style={{ textAlign: 'center' }}>Email: info@PetWell.com</p>
                    </Col>
                </Row>
                <div className="text-center p-3">
                    <h5>Síguenos</h5>
                    <div>
                        <a href="https://facebook.com" className="text-white mx-4" target="_blank" rel="noopener noreferrer">
                            <FaFacebook style={{ fontSize: '30px' }} />
                        </a>
                        <a href="https://instagram.com" className="text-white mx-4" target="_blank" rel="noopener noreferrer">
                            <FaInstagram style={{ fontSize: '30px' }} />
                        </a>
                        <a href="https://twitter.com" className="text-white mx-4" target="_blank" rel="noopener noreferrer">
                            <FaTwitter style={{ fontSize: '30px' }} />
                        </a>
                    </div>
                    <div className="mt-3">
                        © {new Date().getFullYear()} PetWell. Todos los derechos reservados.
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;