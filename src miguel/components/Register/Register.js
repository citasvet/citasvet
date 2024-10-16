// src/components/Registro.js
import { Form, Button } from 'react-bootstrap';

function Registro() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para registrar usuario
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>

            <Button variant="primary" type="submit">Registrar</Button>
        </Form>
    );
}

export default Registro;