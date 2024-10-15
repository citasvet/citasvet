import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      {/* Carrusel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/vector-premium/mujer-feliz-perro-veterinario-medico-sobre-clinica-veterinaria-exterior_48369-16939.jpg?w=360"
            alt="Primera Slide"
          />
          <Carousel.Caption>
            <h3>PetWell</h3>
            <p>a tu servicio</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/vector-premium/veterinario-sexo-femenino-sobre-perros-sentados-sala-espera-oficina-clinica-veterinaria_48369-16931.jpg"
            alt="Segunda Slide"
          />
          <Carousel.Caption>
          <h3>PetWell</h3>
          <p>a tu servicio</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Sección Nuestros Servicios */}
      <Row className="mt-4">
        <Col md={6}>
          <h2>Nuestros Servicios</h2>
          <p>Descripción de los servicios que ofrecemos.</p>
        </Col>
        <Col md={6}>
          <h2 >Quiénes Somos</h2>
          <p>Información sobre nuestra empresa.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;