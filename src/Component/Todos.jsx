import { useState } from "react";
import TodoItem from "./TodoItem";
function Todos() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  function handleOnchange(e) {
    setInputVal(e.target.value);
  }
  function handleSubmit() {
    if (todos.includes(inputVal)) {
      alert("Todo exist in list");
      return;
    } else if (!inputVal) {
      alert("You must type todo");
    } else {
      setTodos([...todos, inputVal]);
      setInputVal("");
    }
  }
  return (
    <>
      <div className="md:w-1/2  w-full md:m-auto md:flex md:justify-center">
        <div>
          <input
            type="text"
            className="mt-5 bg-slate-700 w-full rounded-xl pl-3 text-white md:text-3xl h-10 shadow-2xl shadow-black text-sm"
            onChange={handleOnchange}
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
      <div className="text-center md:text-3xl text-sm">
        {todos.map((todo, index) => {
          return <TodoItem key={index} data={todo} />;
        })}
      </div>
    </>
  );
}
export default Todos;
