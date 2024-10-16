import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import carru1 from '../../assets/image/carru1.jpg';
import carru2 from '../../assets/image/carru2.jpg';
import carru3 from '../../assets/image/carru3.jpg';
import chequeos from '../../assets/image/chequeos.jpg';
import vacunas from '../../assets/image/vacunas.jpg';
import emergencias from '../../assets/image/emergencias.jpg';

const Home = () => {
    return (
        <Container fluid>
            {/* Banner Section */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carru1}
                        alt="Veterinary Clinic Banner"
                        style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Bienvenidos a PetWell</h3>
                        <p style={{ textAlign: 'center' }}>Su veterinaria de confianza para lo que necesita su mascota.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carru2}
                        alt="Veterinary Care"
                        style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Cuidados con amor</h3>
                        <p style={{ textAlign: 'center' }}>Tratamos a sus mascotas como la familia.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carru3}
                        alt="Pet Health"
                        style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Servicios con expertos veterinarios</h3>
                        <p style={{ textAlign: 'center' }}>Brindando atención médica de primer nivel para tus amigos peludos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* Services Section */}
            <Container className="my-5">
                <h2 className="text-center">Nuestros Servicios</h2>
                <Row className="mt-4">
                    {services.map((service, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={service.image} style={{ height: '300px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title>{service.title}</Card.Title>
                                    <Card.Text>{service.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Contact Section */}
            <Container className="my-5 text-center">
                <h2>Nuestros Contactos</h2>
                <p style={{ textAlign: 'center' }}>Si tiene alguna pregunta o necesita programar una cita, ¡no dude en comunicarse!</p>
                <Link to="/contact" className="btn btn-primary">Póngase en contacto con nosotros.</Link>
            </Container>
        </Container>
    );
};

// Sample services data
const services = [
    {
        title: "Chequeos de rutina",
        description: "Chequeos médicos regulares para garantizar el bienestar de tu mascota.",
        image: chequeos
    },
    {
        title: "Vacunas",
        description: "Mantente al día con las vacunas para mantener a tus mascotas sanas.",
        image: vacunas
    },
    {
        title: "Atención de emergencia",
        description: "Servicios de emergencia 24/7 para situaciones médicas urgentes.",
        image: emergencias
    }
];

export default Home;
