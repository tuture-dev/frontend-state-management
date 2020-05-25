import React, { useState } from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import TodoListFilters from "./components/TodoListFilters";
import TodoItemCreator from "./components/TodoItemCreator";
import TodoListStats from "./components/TodoListStats";

function App() {
  return (
    <div className="App">
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <TodoList />
    </div>
  );
}

export default App;
