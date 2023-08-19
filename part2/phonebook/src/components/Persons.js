// Person.js
import React from "react";
import personsService from "../services/persons";

const Persons = ({persons, setPersons, showNotification}) => {
    const deletePerson = (id, name) => {
        if (window.confirm(`Delete ${name}?`)) {
            personsService
                .deletePerson(id)
                .then(() => {
                    setPersons(persons.filter((person) => person.id !== id));
                    showNotification(`Deleted ${name}`);
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