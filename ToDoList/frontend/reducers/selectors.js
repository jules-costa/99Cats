export const allTodos = (state) => {
  let arr = Object.keys(state.todos);
  return arr.map((id) => state.todos[id]);
};
