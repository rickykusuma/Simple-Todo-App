const reducer = (state, action) => {
  if (action.type === "EDIT_TODO") {
    let newTodos = state.todos.map((todo) => {
      if (todo.id === action.payload.id) {
        todo.title = action.payload.title;
      }
      return todo;
    });
    return { ...state, todos: newTodos };
  }

  if (action.type === "ADD_TODO") {
    let newTodos = {
      id: new Date().getTime().toString(),
      title: action.payload,
      completed: false,
    };

    return {
      ...state,
      todos: [...state.todos, newTodos],
    };
  }
  if (action.type === "REMOVE_TODO") {
    let newTodos = state.todos.filter((todo) => {
      if (todo.id !== action.payload) {
        return todo;
      }
    });
    return { ...state, todos: newTodos };
  }
  if (action.type === "TOGGLE_COMPLETE") {
    let tempTodo = state.todos.map((todo) => {
      if (todo.id === action.payload) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    return {
      ...state,
      todos: tempTodo,
    };
  }
  return state;
};

export default reducer;
