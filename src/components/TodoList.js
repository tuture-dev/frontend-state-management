import React from "react";
import TodoItem from "./TodoItem";
import useTodosModel from "../models/todos";

function TodoList() {
  const todosModel = useTodosModel();

  return (
    <>
      {todosModel.getFilterTodoList().map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
