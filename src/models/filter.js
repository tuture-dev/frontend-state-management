import { useState } from "react";
import { createModel } from "hox";

import todos from "./todos";

function useFilter() {
  const [filter, setFilter] = useState("Show All");

  return {
    filter,
    setFilter,
  };
}

export default createModel(useFilter);
