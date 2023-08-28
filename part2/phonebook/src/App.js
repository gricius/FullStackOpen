// App.js
import {useState, useEffect} from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons';
import Notification from './components/Notification';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personsService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
      });
  }, []);

  const showNotification = (message, type) => {
    setNotification({message, type});
    setTimeout(() => {
      setNotification(null);
    }, 5000); // Display the notification for 5 seconds
  };



  const addName = (event) => {
    event.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const changedPerson = {...existingPerson, number: newNumber};
        personsService
          .update(existingPerson.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(persons.map((person) => person.id !== existingPerson.id ? person : returnedPerson));
            setNewName('');
            setNewNumber('');
            showNotification(`Updated number ${newNumber} for ${newName}`, 'success');
          });

      }
      return;
    };


    if (newName === '' || newNumber === '') {
      alert('Please enter a name and number');
      return;
    }

    const nameObject = {
      name: newName,
      number: newNumber
    };

    personsService
      .create(nameObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
        setNewNumber('');
        showNotification(`Added ${newName}`, 'success');
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          showNotification(error.response.data.error, 'error');
        } else {
          showNotification(`Failed to add ${newName}`, 'error');
        }
        setPersons(persons.filter((person) => person.name !== newName));
      });
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
      {notification && <Notification notification={notification} />}
      <Filter searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        onAddName={addName}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} setPersons={setPersons} showNotification={showNotification} />

    </div>
  );
};

export default App;