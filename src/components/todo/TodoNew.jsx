const TodoNew = (props) => {
  console.log(props);
  const { addNewTodo } = props;
  addNewTodo("Sao");
  return (
    <div className="todo-new">
      <input type="text" />
      <button>Add</button>
    </div>
  );
};
export default TodoNew;
