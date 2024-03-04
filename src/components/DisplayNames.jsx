import { useState } from "react";

const DisplayName = ({ name : n, index, removeName, editName: updateName }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(n);
    const [newName, setNewName] = useState(n);

    const editName = () => {
        updateName(name, newName);
        setName(newName);
        setIsEditing(false);
    }
    
    return (
        <li key={index}>
            <p>
                {/* if isEditing is true, display input, otherwise display the name */}
                {isEditing ? 
                <input type="text" value={newName} onChange={(event) => setNewName(event.target.value)} /> :
                <>{name}&nbsp;</>}

                {/* if isEditing is true, display x button, otherwise display nothing */}
                {isEditing ? null : <button onClick={() => removeName(name)}>x</button>}
                
                {/* if isEditing is true, display save button, otherwise display edit button */}
                {isEditing ? 
                <button onClick={editName}>save</button> :
                <button onClick={() => setIsEditing(true)}>edit</button>}
            </p>
        </li>
    );
}

const DisplayNames = ({ names, removeName, editName }) => {
    return (
        <ul>
            {names.map((name, index) => {
                return <DisplayName key={index} name={name} index={index} removeName={removeName} editName={editName} />
            })}
        </ul>
    );
}

export default DisplayNames;