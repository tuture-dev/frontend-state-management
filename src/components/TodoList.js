import React from "react";
import { useRecoilValue } from "recoil";

import { filteredTodoListState } from "../models/filterTodos";
import TodoItem from "./TodoItem";

function TodoList() {
  const filterTodoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      {filterTodoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
