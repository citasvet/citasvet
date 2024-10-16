import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'; // Custom CSS for styling
import { Link } from 'react-router-dom';
import masc from '../../assets/image/masc.jpeg';
import serv1 from '../../assets/image/serv1.jpeg';
import serv2 from '../../assets/image/serv2.jpeg';
import serv3 from '../../assets/image/serv3.jpeg';
import vet from '../../assets/image/vet.jpeg';

const About = () => {
    return (
        <Container className="my-5">
            {/* Main Section with image and text */}
            <Row className="align-items-center mb-5">
                <Col md={6} className="text-center">
                    <img 
                        src= {masc} // Replace with actual image path
                        alt="PetWell Mascot"
                        className="img-fluid"
                        style={{ maxWidth: '86%', height: 'auto' }}
                    />
                </Col>
                <Col md={6}>
                    <h1 className="text-primary">Bienvenido a PetWell</h1>
                    <p>
                        En PetWell, tu mascota es nuestra prioridad. Con más de 35 años de experiencia en el cuidado veterinario, ofrecemos atención integral para asegurar la salud y el bienestar de los compañeros más fieles de tu vida. ¡Descubre nuestros servicios y todo lo que podemos hacer por tu mascota!
                    </p>
                    
                </Col>
            </Row>

            {/* Section 2: Key facts or services */}
            <Row className="my-5 text-center">
                <Col md={4}>
                    <img src={serv1} alt="Servicio 1" className="img-fluid mb-3" />
                    <h3 className="text-primary">Servicio de Emergencias</h3>
                    <p>
                        Contamos con servicio de atención 24/7 para emergencias. Tu mascota siempre estará en las mejores manos, sin importar la hora del día.
                    </p>
                </Col>
                <Col md={4}>
                    <img src={serv2} alt="Servicio 2" className="img-fluid mb-3" />
                    <h3 className="text-primary">Instalaciones Modernas</h3>
                    <p>
                        Nuestro equipo de última generación garantiza diagnósticos rápidos y tratamientos efectivos para una pronta recuperación de tu mascota.
                    </p>
                </Col>
                <Col md={4}>
                    <img src={serv3} alt="Servicio 3" className="img-fluid mb-3" />
                    <h3 className="text-primary">Veterinarios Expertos</h3>
                    <p>
                        Nuestros veterinarios están altamente capacitados y siempre listos para brindar la mejor atención a cada uno de nuestros pacientes.
                    </p>
                </Col>
            </Row>

            {/* Section 3: Our Mission */}
            <Row className="bg-light p-5">
                <Col>
                    <h2 className="text-center text-primary">Nuestra Misión</h2>
                    <p className="text-center">
                        En PetWell, nuestra misión es tratar a cada mascota con amor, cuidado y profesionalismo. Creemos que los animales son miembros importantes de la familia, y nos comprometemos a proporcionar atención veterinaria de calidad para mejorar su calidad de vida.
                    </p>
                </Col>
            </Row>

            {/* Section 4: Why PetWell */}
            <Row className="my-5">
                <Col md={6}>
                    <h2 className="text-primary">¿Por qué elegir PetWell?</h2>
                    <ul className="list-unstyled">
                        <li><strong>Atención Personalizada:</strong> Ofrecemos planes de tratamiento adaptados a las necesidades específicas de tu mascota.</li>
                        <li><strong>Equipo de Profesionales:</strong> Veterinarios apasionados por el bienestar animal, siempre listos para cualquier situación.</li>
                        <li><strong>Compromiso Social:</strong> Participamos activamente en campañas de bienestar animal y fomento de la adopción responsable.</li>
                    </ul>
                    
                </Col>
                <Col md={6}>
                    <img 
                        src={vet} // Replace with actual image path
                        alt="Why PetWell"
                        className="img-fluid"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Col>
            </Row>

            {/* Final Section: Call to Action */}
            <Row className="text-center my-5">
                <Col>
                    <h3 className="text-primary">¡Visítanos y Conoce la Diferencia!</h3>
                    <p>Queremos que tu mascota disfrute de la mejor atención veterinaria. ¡Estamos aquí para ayudarte!</p>
                    <Link to="/services" className="btn btn-primary">Agenda tu cita</Link>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
