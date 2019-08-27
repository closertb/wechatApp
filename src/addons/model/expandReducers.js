export default function expandReducers(reducers) {
  return {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    ...reducers
  }
}
