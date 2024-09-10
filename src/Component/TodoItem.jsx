import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
function TodoItem(props) {
  const styleClass = props.data.isDone ? "line-through" : "";
  return (
    <>
      <div className="mt-5 bg-slate-200 w-11/12 m-auto rounded-xl p-2 border border-slate-800 shadow-2xl shadow-black flex justify-between">
        <div>
          <p className={styleClass}> {props.data.name}</p>
        </div>
        <div>
          <span className=" bg-blue-100 float-end">
            <FontAwesomeIcon
              icon={faCheck}
              className="mr-4 text-green-900"
              onClick={() => props.markAsDone(props.data.name)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={props.removeItem}
              className="text-red-700 mr-4"
            />
            <FontAwesomeIcon icon={faPen} onClick={props.mark} />
          </span>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
