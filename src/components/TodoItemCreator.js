import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch.todos.addTodo({
      id: getId(),
      text: inputValue,
      isComplete: false,
    });

    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;
