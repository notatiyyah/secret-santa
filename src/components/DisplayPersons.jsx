import { useState } from "react";

const DisplayPerson = ({ index, person : n, removePerson, editPerson }) => {
    const [personName, setPersonName] = useState(n.personName);
    const [blacklist, setBlacklist] = useState(n.blacklist);
    const [isEditing, setIsEditing] = useState(false);

    const onNameChange = (e) => {
        setPersonName(e.target.value);
    }

    const onSave = () => {
        editPerson(index, { personName, blacklist });
        setIsEditing(false);
    }

    const onDelete = () => {
        removePerson(index);
    }

    return (
        <li key={index}>
            {isEditing ? (
                <>
                    <input type="text" value={personName} onChange={onNameChange} />
                    <button onClick={onSave}>save</button>
                </>
            ) : 
            (
                <p>
                    <span>{personName}&nbsp;</span>
                    <button onClick={onDelete}>x</button>
                    <button onClick={() => setIsEditing(true)}>edit</button>
                </p>
            )}
        </li>
    );
}

const DisplayPersons = ({ persons, removePerson, editPerson }) => {
    return (
        <ul>
            {persons.map((person, index) => {
                return <DisplayPerson key={person} index={index} person={person} removePerson={removePerson} editPerson={editPerson} />
            })}
        </ul>
    );
}

export default DisplayPersons;