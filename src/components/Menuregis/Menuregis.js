import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Register from '../Register/Register';
import ListUsers from '../ListUsers/ListUsers';
import ListPets from '../ListPets/ListPets';
import './Menuregis.css'; // Archivo CSS personalizado

const Menuregis = () => {
    const [activeKey, setActiveKey] = useState('registro'); // Cambiado a 'registro' para que coincida con el evento

    return (
        <div>
            <Nav variant="tabs" activeKey={activeKey} onSelect={(selectedKey) => setActiveKey(selectedKey)} className="custom-nav">
                <Nav.Item>
                    <Nav.Link eventKey="registro" className="text-white">Registro</Nav.Link> {/* Cambiado a 'registro' */}
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="listUsers" className="text-white">Usuarios Registrados</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="listPets" className="text-white">Medicos registrados</Nav.Link>
                </Nav.Item>
            </Nav>

            <div className="tab-content mt-4">
                {activeKey === 'registro' && <Register />}
                {activeKey === 'listUsers' && <ListUsers />}
                {activeKey === 'listPets' && <ListPets />}
            </div>
        </div>
    );
};

export default Menuregis;
