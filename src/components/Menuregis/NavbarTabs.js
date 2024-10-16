import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Register from '../Register/Register';
import ListUsers from '../ListUsers/ListUsers';
import ListPets from '../ListPets/ListPets';
import './NavbarTabs.css'; // Importa el archivo CSS

function NavbarTabs() {
  return (
    <Tabs
      defaultActiveKey="register"
      id="uncontrolled-tab-example"
      className="mb-4"
    >
      <Tab eventKey="register" title={<span className="custom-tab-title ">Registro</span>}>
        <Register />
      </Tab>

      <Tab eventKey="listUsers" title={<span className="custom-tab-title">Usuarios Registrados</span>}>
        <ListUsers />
      </Tab>
      
      <Tab eventKey="listPets" title={<span className="custom-tab-title">Mascotas Registradas</span>}>
        <ListPets />
      </Tab>
    </Tabs>
  );
}

export default NavbarTabs;
