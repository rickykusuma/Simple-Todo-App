import React from "react";
import { useGlobalContext } from "../context";

function Header() {
  const { setName, name, isEditing, handleSubmit } = useGlobalContext();
  return (
    <header className="text-center">
      <h1>To Do List</h1>
      <hr />
      {/* form Add To Do */}
      <div className="row">
        <form
          className="form"
          style={{ margin: "0 auto" }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div style={{ width: "100%" }}>
            <label htmlFor="inputTodo" style={{ paddingRight: "5px" }}>
              {isEditing ? "Edit To do :" : "Add to do :"}
            </label>
            <input
              value={name}
              name="inputTodo"
              type="text"
              style={{
                margin: "0 auto",
                width: "75%",
                height: "38px",
                verticalAlign: "middle",
              }}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              style={{
                margin: "0 auto",
              }}
              className="btn btn-primary"
              type="submit"
            >
              {isEditing ? "Save" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}

export default Header;
