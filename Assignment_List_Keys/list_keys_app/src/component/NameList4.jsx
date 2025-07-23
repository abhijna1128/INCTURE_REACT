import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function NameList4() {
  const [persons, setPersons] = useState([
    { id: 111, name: "Abhijna", age: 22 },
    { id: 222, name: "Shreelakshmi", age: 23 },
    { id: 333, name: "Krithika", age: 21 },
    { id: 444, name: "Krishna", age: 24 }
  ]);

  const [newPersonName, setNewPersonName] = useState('');
  const [newPersonAge, setNewPersonAge] = useState('');

  const handleAddButton = () => {
    // if (!newPersonName || !newPersonAge) return; // Optional validation

    const newPerson = {
      id: Date.now(),
      name: newPersonName,
      age: parseInt(newPersonAge)
    };

    setPersons([...persons, newPerson]);
    setNewPersonName('');
    setNewPersonAge('');
  };

  return (
    <div className='container mt-4'>
      <h2 className='head3'>Names table:</h2>

      <InputGroup className="mb-3" style={{ maxWidth: '400px' }}>
        <Form.Control
          placeholder="Enter name"
          value={newPersonName}
          onChange={(e) => setNewPersonName(e.target.value)}
        />
        <Form.Control
          type="number"
          placeholder="Enter age"
          value={newPersonAge}
          onChange={(e) => setNewPersonAge(e.target.value)}
        />
        <Button variant="outline-primary" onClick={handleAddButton}>
          Add Person
        </Button>
      </InputGroup>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default NameList4;
