function TodoItem(props) {
  return (
    <>
      <ul>
        <li className="mt-5 bg-blue-700 w-11/12 m-auto rounded-xl p-2">
          {props.data}
        </li>
      </ul>
    </>
  );
}
export default TodoItem;
