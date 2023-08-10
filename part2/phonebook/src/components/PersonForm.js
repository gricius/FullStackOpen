const PersonForm = ({newName, newNumber, onNameChange, onNumberChange, onAddName}) => {
    return (
        <form onSubmit={onAddName}>
            <div>
                name: <input value={newName} onChange={onNameChange} />
            </div>
            <div>
                number: <input value={newNumber} onChange={onNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

export default PersonForm;