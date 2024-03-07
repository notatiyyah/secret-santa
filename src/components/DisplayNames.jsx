import { useState } from "react";

const DisplayName = ({ index, name : n, removeName : deleteName, editName }) => {
    const [name, setName] = useState(n);
    const [isEditing, setIsEditing] = useState(false);

    const onNameEdit = (e) => {
        setName(e.target.value);
    }

    const updateName = () => {
        editName(index, name);
        setIsEditing(false);
    }

    const removeName = () => {
        deleteName(index);
    }

    if(isEditing){
        return (
            <li key={index}>
                <input type="text" value={name} onChange={onNameEdit} />
                <button onClick={updateName}>save</button>
            </li>
        );
    }

    return (
        <li key={index}>
            <p>
                {name}&nbsp;
                <button onClick={removeName}>x</button>
                <button onClick={() => setIsEditing(true)}>edit</button>
            </p>
        </li>
    );
}

const DisplayNames = ({ names, removeName, editName }) => {
    console.log(names);
    return (
        <ul>
            {names.map((name, index) => {
                return <DisplayName key={index+name} index={index} name={name} removeName={removeName} editName={editName} />
            })}
        </ul>
    );
}

export default DisplayNames;