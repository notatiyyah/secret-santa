import { useState } from "react";
import InputNames from "./InputNames";
import DisplayPersons from "./DisplayPersons";

const Persons = () => {
    const [persons, setPersons] = useState([]);
    console.log(persons);
    
    const addPerson = (name) => {
        var personObj = {personName: name, blacklist: []};
        setPersons(oldPersons => [personObj, ...oldPersons]);
    }

    const removePerson = (index) => {
        setPersons(oldPersons => oldPersons.filter((_, i) => i !== index));
    }

    const editPerson = (index, newPerson) => {
        setPersons(oldPersons => {
            oldPersons[index] = newPerson;
            return oldPersons;
        });
    }

    return (
        <>
            <InputNames addPerson={addPerson} />
            <DisplayPersons persons={persons} removePerson={removePerson} editPerson={editPerson} />
        </>
    )
}

export default Persons;