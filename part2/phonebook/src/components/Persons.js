
import personsService from "../services/persons";

const Persons = ({persons, setPersons}) => {
    const deletePerson = (id) => {
        const person = persons.find((person) => person.id === id);
        if (window.confirm(`Delete ${person.name}?`)) {
            personsService
                .deletePerson(id)
                .then(() => {
                    setPersons(persons.filter((person) => person.id !== id));
                });
        }
    };


    return (
        <ul>
            {persons.map((person) => (
                <li key={person.id}>
                    {person.name} - {person.number} -
                    <button onClick={() => deletePerson(person.id)}>delete</button>
                </li>
            ))}
        </ul>
    );
};

export default Persons;