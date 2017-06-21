import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {allTodos} from './reducers/selectors';
import {receiveTodos, receiveTodo} from './actions/todo_actions';
import Root from './components/root';


window.Store = configureStore();
window.allTodos = allTodos;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;

class Todo extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo's App</h1>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root store={window.Store} />, document.getElementById('root'));
});
