import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";

import TodoItemCreator from "./components/TodoItemCreator";
import TodoList from "./components/TodoList";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStats from "./components/TodoListStats";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoListStats />
        <TodoListFilters />
        <TodoItemCreator />
        <TodoList />
      </div>
    </RecoilRoot>
  );
}

export default App;
