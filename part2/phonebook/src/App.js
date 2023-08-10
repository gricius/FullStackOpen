import {useState} from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '2222-2222', id: 1},
    {name: 'Bruno Jordano', number: '3222-2222', id: 2},
    {name: 'Suzy Gonzalo', number: '5467-2787', id: 3},
    {name: 'Sebastian Skoda', number: '5776-12235', id: 4}
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addName = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    if (newName === '' || newNumber === '') {
      alert('Please enter a name and number');
      return;
    }

    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    setPersons(persons.concat(nameObject));
    setNewName('');
    setNewNumber('');
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={searchTerm} onChange={handleSearchChange} />
      </div>


      <h3>Add a new</h3>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
          <li key={person.id}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default App;