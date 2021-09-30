import React from "react";
import { useGlobalContext } from "../context";
import TodoItem from "../TodoItem";

function FilteredList() {
  const { applyFilter, toggleCompleted, filter } = useGlobalContext();
  let filteredItem = applyFilter();
  return (
    <ul>
      {filteredItem.length > 0
        ? filteredItem.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                {...todo}
                toggleCompleted={toggleCompleted}
              />
            );
          })
        : null}
      {filteredItem.length === 0 ? (
        <p className="alert" style={{ textAlign: "center" }}>
          No items {filter === "Completed" && "is Completed"}
          {filter === "Active" && "is Active"}
        </p>
      ) : null}
    </ul>
  );
}

export default FilteredList;
