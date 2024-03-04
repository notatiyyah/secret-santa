
const InputNames = ({names, addName}) => {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          addName(event.target.value);
            event.target.value = "";
        }
      }
    

    return (
        <input type="text" onKeyDown={handleKeyDown}/>
    );
};

export default InputNames;