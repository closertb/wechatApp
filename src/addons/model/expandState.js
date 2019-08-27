export default function expandState(state) {
  return {
    loading: {},
    ...state
  };
}