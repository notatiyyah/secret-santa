
const InputNames = ({addPerson}) => {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          addPerson(event.target.value);
            event.target.value = "";
        }
      }
    

    return (
        <input type="text" onKeyDown={handleKeyDown}/>
    );
};

export default InputNames;