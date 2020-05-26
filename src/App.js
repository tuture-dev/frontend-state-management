import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import TodoItemCreator from "./components/TodoItemCreator";
import TodoList from "./components/TodoList";
import TodoListFilters from "./components/TodoListFilters";
import TodoListStats from "./components/TodoListStats";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoListStats />
        <TodoListFilters />
        <TodoItemCreator />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
