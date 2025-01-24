import { useState } from "react";
const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState("");
  const { addNewTodo } = props;

  //   addNewTodo("Sao");
  const handleClick = () => {
    if (valueInput.length > 0) {
      addNewTodo(valueInput);
      setValueInput("");
    }
  };
  const handleOnChange = (name) => {
    setValueInput(name);
  };
  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput}
      />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
      <div style={{ display: "flex", padding: "20px" }}>
        My test input is = {valueInput}
      </div>
    </div>
  );
};
export default TodoNew;
