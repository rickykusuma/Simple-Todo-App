import React from "react";
import { useGlobalContext } from "../context";

function Footer() {
  const { todos, setFilter, filter } = useGlobalContext();
  return (
    <footer className="row">
      <div
        className="float-left"
        style={{
          width: "fit-content",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        {todos.length || "0"} items left
      </div>
      {/* button all completed active */}
      <div
        className="float-right"
        style={{ width: "fit-content", marginLeft: "auto" }}
      >
        <button
          onClick={() => setFilter("All")}
          className={`${filter === "All" ? "active btn" : "btn"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Active")}
          className={`${filter === "Active" ? "active btn" : "btn"}`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("Completed")}
          className={`${filter === "Completed" ? "active btn" : "btn"}`}
        >
          Completed
        </button>
      </div>
    </footer>
  );
}

export default Footer;
