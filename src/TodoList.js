import React from "react";
import Header from "./component/Header";
import FilteredList from "./component/FilteredList";
import Footer from "./component/Footer";

function TodoList() {
  return (
    <section className="container">
      <div className="row">
        <div className="todolist">
          <Header />
          <FilteredList />
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default TodoList;
