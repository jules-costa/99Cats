import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_TODOS:
      return merge({}, action.todos);
    case RECEIVE_TODO:
      let newTodo = {[action.todo.id]: action.todo};
      return merge({}, oldState, newTodo);
    case REMOVE_TODO:
      let copyState = merge({}, oldState);
      delete copyState.action.todo;
      return copyState;
    default:
      return oldState;
  }
};

export default todosReducer;
