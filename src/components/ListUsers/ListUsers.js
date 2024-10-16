import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const ListUsers = () => {
    const initialUsuarios = [
        {
            nombres: "Juan",
            apellidos: "Pérez",
            direccion: "Calle Falsa 123",
            email: "juan.perez@example.com",
            celular: "1234567890",
            usuario: "juanp"
        },
        {
            nombres: "María",
            apellidos: "Gómez",
            direccion: "Avenida Siempre Viva 742",
            email: "maria.gomez@example.com",
            celular: "0987654321",
            usuario: "mariag"
        },
        {
            nombres: "Luis",
            apellidos: "Rodríguez",
            direccion: "Boulevard de los Sueños Rotos 456",
            email: "luis.rodriguez@example.com",
            celular: "1122334455",
            usuario: "luisr"
        },
        {
            nombres: "Ana",
            apellidos: "Martínez",
            direccion: "Calle de la Amistad 789",
            email: "ana.martinez@example.com",
            celular: "2233445566",
            usuario: "anam"
        },
        {
            nombres: "Carlos",
            apellidos: "Hernández",
            direccion: "Avenida Libertad 321",
            email: "carlos.hernandez@example.com",
            celular: "3344556677",
            usuario: "carlosh"
        },
        {
            nombres: "Lucía",
            apellidos: "Fernández",
            direccion: "Calle del Sol 654",
            email: "lucia.fernandez@example.com",
            celular: "4455667788",
            usuario: "luciaf"
        },
        {
            nombres: "Javier",
            apellidos: "Sánchez",
            direccion: "Calle de la Esperanza 987",
            email: "javier.sanchez@example.com",
            celular: "5566778899",
            usuario: "javiers"
        },
        {
            nombres: "Sofía",
            apellidos: "Torres",
            direccion: "Avenida del Mar 852",
            email: "sofia.torres@example.com",
            celular: "6677889900",
            usuario: "sofiat"
        },
        {
            nombres: "Diego",
            apellidos: "Castillo",
            direccion: "Calle del Río 1357",
            email: "diego.castillo@example.com",
            celular: "7788990011",
            usuario: "diegoc"
        },
        {
            nombres: "Valentina",
            apellidos: "Moreno",
            direccion: "Avenida de la Paz 2468",
            email: "valentina.moreno@example.com",
            celular: "8899001122",
            usuario: "valentinam"
        }
    ];

    const [userList, setUserList] = useState(initialUsuarios);
    const [showModal, setShowModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const handleEdit = (user) => {
        setCurrentUser(user);
        setShowModal(true);
    };

    const handleDelete = (usuario) => {
        setUserList(userList.filter(user => user.usuario !== usuario));
    };

    const handleSave = () => {
        setUserList(userList.map(user => (user.usuario === currentUser.usuario ? currentUser : user)));
        setShowModal(false);
        setCurrentUser(null);
    };

    return (
        <div className="container mt-4">
            <h2>Lista de Usuarios</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Dirección</th>
                        <th>Email</th>
                        <th>Celular</th>
                        <th>Usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, index) => (
                        <tr key={index}>
                            <td>{user.nombres}</td>
                            <td>{user.apellidos}</td>
                            <td>{user.direccion}</td>
                            <td>{user.email}</td>
                            <td>{user.celular}</td>
                            <td>{user.usuario}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEdit(user)}>Editar</Button>{' '}
                                <Button variant="danger" onClick={() => handleDelete(user.usuario)}>Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Edit User Modal */}
            {currentUser && (
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Usuario</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formNombres">
                                <Form.Label>Nombres</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={currentUser.nombres}
                                    onChange={(e) => setCurrentUser({ ...currentUser, nombres: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group controlId="formApellidos">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={currentUser.apellidos}
                                    onChange={(e) => setCurrentUser({ ...currentUser, apellidos: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group controlId="formDireccion">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={currentUser.direccion}
                                    onChange={(e) => setCurrentUser({ ...currentUser, direccion: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={currentUser.email}
                                    onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group controlId="formCelular">
                                <Form.Label>Celular</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={currentUser.celular}
                                    onChange={(e) => setCurrentUser({ ...currentUser, celular: e.target.value })}
                                />
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={handleSave}>
                            Guardar Cambios
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default ListUsers;