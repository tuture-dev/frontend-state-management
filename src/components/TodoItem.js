import React from "react";
import useTodosModel from "../models/todos";

function TodoItem({ item }) {
  const todosModel = useTodosModel();
  const index = todosModel.todoList.findIndex((listItem) => listItem === item);

  return (
    <div>
      <input
        type="text"
        value={item.text}
        onChange={() => todosModel.editItemText(item, index)}
      />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={() => todosModel.toggleItemCompletion(item, index)}
      />
      <button onClick={() => todosModel.deleteItem(index)}>X</button>
    </div>
  );
}

export default TodoItem;
