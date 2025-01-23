import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import TodoImage from "./assets/img/todo-image.png";
import { useState } from "react";
const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    { id: 2, name: "Watching youtube" },
  ]);
  const name = "Sao";
  const age = 23;
  const data = {
    address: "Can Tho",
    country: "Vietnam",
  };
  const addNewTodo = (name) => {
    alert(`Call me ${name}`);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData name={name} age={age} data={data} todoList={todoList} />
      <div className="todo-image">
        <img src={TodoImage} />
      </div>
    </div>
  );
};

export default App;
