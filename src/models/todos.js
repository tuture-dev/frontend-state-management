import { useState } from "react";
import { createModel } from "hox";

import useFilterModel from "./filter";

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function useTodos() {
  const [todoList, setTodoList] = useState([]);
  const filterModel = useFilterModel();

  // actions
  const editItemText = ({ target: { value } }, item, index) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = (item, index) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = (index) => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  // selectors
  const getFilterTodoList = () => {
    switch (filterModel.filter) {
      case "Show Completed":
        return todoList.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return todoList.filter((item) => !item.isComplete);
      default:
        return todoList;
    }
  };

  const getTodoListStats = () => {
    const todoList = getFilterTodoList();
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  };

  return {
    todoList,
    setTodoList,
    editItemText,
    toggleItemCompletion,
    deleteItem,
    getFilterTodoList,
    getTodoListStats,
  };
}

export default createModel(useTodos);
