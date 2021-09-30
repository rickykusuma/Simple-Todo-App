import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useGlobalContext } from "./context";
function TodoItem({ id, title, completed, toggleCompleted }) {
  const { editTodo, removeTodo } = useGlobalContext();
  return (
    <div>
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompleted(id)}
          name={title}
          id={id}
        />
        <label className={`${completed ? "crossed-line" : ""} `}>{title}</label>
        {/* btn container */}
        <div className="btn-container" style={{ marginLeft: "auto" }}>
          <button className="btn" onClick={() => editTodo(id)}>
            <FaEdit style={{ color: "green" }} />
          </button>
          <button
            className="btn"
            onClick={() => {
              window.confirm("Are you sure you want to delete this item?") &&
                removeTodo(id);
            }}
          >
            <FaTrash style={{ color: "red" }} />
          </button>
        </div>
      </li>
      <hr />
    </div>
  );
}

export default TodoItem;
