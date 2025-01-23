import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import TodoImage from "./assets/img/todo-image.png";
const App = () => {
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
      <TodoData name={name} age={age} data={data} />
      <div className="todo-image">
        <img src={TodoImage} />
      </div>
    </div>
  );
};

export default App;
