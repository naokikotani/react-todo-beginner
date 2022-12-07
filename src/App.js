import React, { useState, useEffect } from "react";

import { StatusSelect } from "./components/StatusSelect";
import { InputForm } from "./components/InputForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        case "0":
          setFilteredTodos(todos.filter((todo) => todo.status === "0"));
          break;
        case "1":
          setFilteredTodos(todos.filter((todo) => todo.status === "1"));
          break;
        case "2":
          setFilteredTodos(todos.filter((todo) => todo.status === "2"));
          break;
        default:
          setFilteredTodos(todos);
      }
    };
    filteringTodos();
  }, [filter, todos]);

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">タスク管理アプリ</h1>
        <StatusSelect filter={filter} setFilter={setFilter} />
      </header>

      <InputForm setTodos={setTodos} todos={todos} />

      <TodoList todoList={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
