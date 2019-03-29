import TodoController from './todo.controller';
import template from './todo.html';
import './todo.scss';

const TodoComponent = {
  controller: TodoController,
  controllerAs: 'todo',
  template: template
}

export default TodoComponent;
