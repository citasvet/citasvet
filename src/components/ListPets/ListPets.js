import React from 'react';
import { Table, Container } from 'react-bootstrap';

// Temporary array of registered pets
const pets = [
  { id: 1, name: 'Fido', type: 'Dog', breed: 'Labrador', age: 3 },
  { id: 2, name: 'Whiskers', type: 'Cat', breed: 'Siamese', age: 2 },
  { id: 3, name: 'Coco', type: 'Dog', breed: 'Poodle', age: 4 },
  { id: 4, name: 'Bella', type: 'Cat', breed: 'Persian', age: 5 },
  { id: 5, name: 'Max', type: 'Dog', breed: 'Beagle', age: 1 },
  { id: 6, name: 'Luna', type: 'Cat', breed: 'Bengal', age: 3 },
  { id: 7, name: 'Buddy', type: 'Dog', breed: 'Golden Retriever', age: 6 },
  { id: 8, name: 'Mittens', type: 'Cat', breed: 'Maine Coon', age: 4 },
  { id: 9, name: 'Daisy', type: 'Dog', breed: 'Bulldog', age: 2 },
  { id: 10, name: 'Shadow', type: 'Cat', breed: 'Ragdoll', age: 3 }
];

function ListPets() {
  return (
    <Container className="mt-4">
      <h3 className="text-center">Mascotas Registradas</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Raza</th>
            <th>Edad (años)</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.id}</td>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td>{pet.breed}</td>
              <td>{pet.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ListPets;