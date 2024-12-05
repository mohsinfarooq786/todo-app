import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";

function App() {
  return (
    <>
    <AddTodo />
    <TodosList />
    </>
  );
}

export default App;
