import { useState } from "react";
import InputNames from "./InputNames";
import DisplayNames from "./DisplayNames";

const Names = () => {
    const [names, setNames] = useState([]);
    
    const addName = (name) => {
        setNames(oldNames => [name, ...oldNames]);
    }

    const removeName = (name) => {
        setNames(oldNames => oldNames.filter(n => n !== name));
    }

    const editName = (name, newName) => {
        setNames(oldNames => oldNames.map(n => n === name ? newName : n));
    }

    return (
        <>
            <InputNames names={names} addName={addName} />
            <DisplayNames names={names} removeName={removeName} editName={editName} />
        </>
    )
}

export default Names;