// Person.js
import React from "react";
import personsService from "../services/persons";

const Persons = ({persons, setPersons, showNotification}) => {
    const deletePerson = (id, name) => {
        if (window.confirm(`Delete ${name}?`)) {
            console.log(`Deleting ${name} with id ${id}`);
            personsService
                .deletePerson(id)
                .then(() => {
                    setPersons(persons.filter((person) => person.id !== id));
                    showNotification(`Deleted ${name}`, 'success');
                })
                .catch((error) => {
                    showNotification(`The ${name} already deleted`, 'error');
                });
        }
    };



    return (
        <ul>
            {persons.map((person) => (
                <li key={person.id}>
                    {person.name} - {person.number} -
                    <button onClick={() => deletePerson(person.id, person.name)}>delete</button>
                </li>
            ))}
        </ul>
    );
};

export default Persons;