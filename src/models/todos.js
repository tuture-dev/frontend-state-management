export const todos = {
  state: {
    todoList: [],
  },
  reducers: {
    setTodoList(state, payload) {
      return { ...state, todoList: payload };
    },
    addTodo(state, payload) {
      return { ...state, todoList: [...state.todoList, payload] };
    },
  },
  selectors: (slice, createSelector) => ({
    filteredTodoListState() {
      return (rootState, props) => {
        const filter = rootState.filter.filter;
        const todoList = rootState.todos.todoList;

        switch (filter) {
          case "Show Completed":
            return todoList.filter((item) => item.isComplete);
          case "Show Uncompleted":
            return todoList.filter((item) => !item.isComplete);
          default:
            return todoList;
        }
      };
    },
    todoListStatsState(models) {
      return createSelector(
        slice,
        models.todos.filteredTodoListState,
        (todos, filteredTodoList) => {
          const todoList = filteredTodoList;
          const totalNum = todoList.length;
          const totalCompletedNum = todoList.filter((item) => item.isComplete)
            .length;
          const totalUncompletedNum = totalNum - totalCompletedNum;
          const percentCompleted =
            totalNum === 0 ? 0 : totalCompletedNum / totalNum;

          return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
          };
        }
      );
    },
  }),
};
