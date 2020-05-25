import React from "react";
import useFilterModel from "../models/filter";

function TodoListFilters() {
  const filter = useFilterModel();

  const updateFilter = ({ target: { value } }) => {
    filter.setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter.filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}

export default TodoListFilters;
