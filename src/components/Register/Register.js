import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isDuplicate = users.some(user => 
      user.email === formData.email || user.username === formData.username
    );

    if (isDuplicate) {
      setError('Email o Usuaria ya existe!');
      setSuccess('');
      return;
    }

    setUsers([...users, formData]);
    setSuccess('Usuario agregado!');
    setError('');

    // Limpiar el formulario
    setFormData({
      name: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    });
  };

  return (
    <Container className="form-container mt-5">
      <h2 className="text-center">Registro</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <Form.Group controlId="formName">
          <Form.Label>Nombres</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            placeholder="Digite su nombre" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control 
            type="text" 
            name="lastName" 
            placeholder="Digite su apellido" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            placeholder="Digite su correo" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formUsername">
          <Form.Label>Usuario</Form.Label>
          <Form.Control 
            type="text" 
            name="username" 
            placeholder="Digite su usuario" 
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
            type="password" 
            name="password" 
            placeholder="Cree su contraseña" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Aceptar
        </Button>
      </Form>

      <h3 className="mt-4">Usuarios registrados:</h3>
      <ul className="list-group">
        {users.map((user, index) => (
          <li key={index} className="list-group-item">
            {user.username} -  {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Register;
