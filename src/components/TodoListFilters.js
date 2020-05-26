import React from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoListFilters() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  const updateFilter = ({ target: { value } }) => {
    dispatch.filter.setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}

export default TodoListFilters;
