export const filter = {
  state: {
    filter: "Show All",
  },
  reducers: {
    setFilter(state, payload) {
      return { ...state, filter: payload };
    },
  },
};
