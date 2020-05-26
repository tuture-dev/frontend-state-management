import React from "react";
import TodoItem from "./TodoItem";
import { useSelector, useStore } from "react-redux";

function TodoList() {
  const store = useStore();
  const filterTodoList = useSelector(store.select.todos.filteredTodoListState);

  return (
    <>
      {filterTodoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
