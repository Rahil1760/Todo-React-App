import { useState } from "react";
import TodoItem from "./TodoItem";
function Todos() {
  // const [inputVal, setInputVal] = useState("");
  const [inputVal, setInputVal] = useState({ name: "", isDone: false });
  const [todos, setTodos] = useState([]);

  function handleOnchange(e) {
    setInputVal({ name: e.target.value, isDone: false });
  }
  function handleSubmit() {
    if (!inputVal.name) {
      alert("You must type todo");
    } else {
      setInputVal({ name: "", isDone: false });
      setTodos([...todos, inputVal]);
    }
  }
  function removeTodo(index) {
    const filterItem = todos.filter((item, id) => {
      return id != index;
    });
    setTodos(filterItem);
  }
  function editTodo(todos, index) {
    setInputVal(todos[index]);
    todos.splice(index, 1);
    setTodos(todos);
  }
  function markAsDone(name) {
    const styles = todos.map((todo) => {
      return todo.name === name ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodos(styles);
  }

  return (
    <>
      <div className="md:w-1/2  w-full md:m-auto md:flex md:justify-center">
        <div>
          <input
            type="text"
            className="mt-5 bg-slate-200 w-full rounded-xl pl-3 text-black md:text-3xl h-10 shadow-2xl shadow-black text-sm border-black border"
            onChange={handleOnchange}
            value={inputVal.name}
            placeholder="Add todos here"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="border border-black w-20 h-10 mt-5 rounded-xl shadow-2xl shadow-black text-sm"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
      <div className="text-center md:text-3xl text-sm mt-10">
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              data={todo}
              removeItem={() => removeTodo(index)}
              mark={() => editTodo(todos, index)}
              markAsDone={markAsDone}
            />
          );
        })}
      </div>
    </>
  );
}
export default Todos;
