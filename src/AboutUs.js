import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container className="mt-4">
            <h2>Quiénes Somos</h2>
            <p style={{textAlign: 'justify'}}>
            En Petwell, somos una clínica veterinaria comprometida con el bienestar y la salud de tus mascotas. Nuestro equipo está formado por profesionales altamente capacitados, apasionados por los animales, que ofrecen una atención integral y personalizada para garantizar que tus compañeros reciban el mejor cuidado posible.
            </p>
                
            <Row className="mt-4">
                <Col md={4}>
                    <h3>Misión</h3>
                    <p style={{textAlign: 'justify'}}>
                    En Petwell, nuestra misión es proporcionar atención veterinaria de alta calidad, enfocada en el bienestar integral de las mascotas. Nos comprometemos a ofrecer un servicio cercano, ético y profesional, utilizando tecnología avanzada y conocimientos actualizados para prevenir, diagnosticar y tratar a tus compañeros peludos. Creemos en la importancia de la educación y el acompañamiento para garantizar una vida saludable y feliz para todas las mascotas.


                    </p>
                </Col>
                <Col md={4}>
                    <h3>Visión</h3>
                    <p style={{textAlign: 'justify'}}>
                    Ser la clínica veterinaria líder en la comunidad, reconocida por nuestra excelencia médica, innovación y enfoque centrado en el cuidado integral de las mascotas. Aspiramos a establecer un estándar de atención veterinaria que inspire confianza en los dueños de mascotas, promoviendo la salud animal y contribuyendo al bienestar de las familias a las que servimos.
                    </p>
                </Col>
                <Col md={4}>
                    <h3>Objetivo</h3>
                    <p style={{textAlign: 'justify'}}>
                    Nuestro principal objetivo es garantizar la salud y el bienestar de las mascotas mediante servicios veterinarios de calidad, tratamientos preventivos y educación para los dueños. Nos esforzamos por brindar una experiencia positiva en cada visita, con un equipo comprometido que ofrece soluciones efectivas y personalizadas para cada paciente.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;