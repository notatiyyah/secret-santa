import { useState } from "react";
import InputNames from "./InputNames";
import DisplayNames from "./DisplayNames";

const Names = () => {
    const [names, setNames] = useState([]);
    
    const addName = (name) => {
        setNames(oldNames => [name, ...oldNames]);
    }

    const removeName = (index) => {
        setNames(oldNames => oldNames.filter((_, i) => i !== index));
    }

    const editName = (index, newName) => {
        setNames(oldNames => {
            oldNames[index] = newName;
            return oldNames;
        });
    }

    return (
        <>
            <InputNames addName={addName} />
            <DisplayNames names={names} removeName={removeName} editName={editName} />
        </>
    )
}

export default Names;