import React, { useState, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

// get data from local storage
const getLocalStorage = () => {
  let todos = localStorage.getItem("todos");
  if (todos) {
    return (todos = JSON.parse(localStorage.getItem("todos")));
  } else {
    return [];
  }
};

const AppContext = React.createContext();

const initialState = {
  loading: false,
  todos: getLocalStorage(),
};

const AppProvider = ({ children }) => {
  // initial variable
  const [state, dispatch] = useReducer(reducer, initialState);
  const [filter, setFilter] = useState("All");
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const applyFilter = () => {
    if (filter === "All") {
      return state.todos;
    } else if (filter === "Active") {
      return state.todos.filter((todo) => todo.completed !== true);
    } else if (filter === "Completed") {
      return state.todos.filter((todo) => todo.completed === true);
    }
  };

  const toggleCompleted = (id) =>
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("please enter value");
    } else if (name && isEditing) {
      dispatch({ type: "EDIT_TODO", payload: { id: editID, title: name } });
      setIsEditing(false);
    } else {
      dispatch({ type: "ADD_TODO", payload: name });
    }
    setName("");
  };

  const removeTodo = (id) => {
    if (isEditing) {
      alert("You Should Save it First~!");
    } else {
      dispatch({ type: "REMOVE_TODO", payload: id });
    }
  };

  const editTodo = (id) => {
    const specificItem = state.todos.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleCompleted,
        filter,
        handleSubmit,
        applyFilter,
        setFilter,
        name,
        setName,
        isEditing,
        editTodo,
        removeTodo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
