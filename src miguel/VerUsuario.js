// src/VerUsuarios.js
import React from 'react';
import { Table } from 'react-bootstrap';

const VerUsuarios = ({ registros }) => {
    return (
        <div className="container mt-4">
            <h2>Listado de Usuarios Registrados</h2>
            {registros.length === 0 ? (
                <p>No hay registros disponibles.</p>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Cédula</th>
                            <th>Dirección</th>
                            <th>Correo Electrónico</th>
                            <th>Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registros.map((registro, index) => (
                            <tr key={index}>
                                <td>{registro.nombre}</td>
                                <td>{registro.apellido}</td>
                                <td>{registro.cedula}</td>
                                <td>{registro.direccion}</td>
                                <td>{registro.email}</td>
                                <td>{registro.telefono}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default VerUsuarios;