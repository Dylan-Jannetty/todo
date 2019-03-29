import TodoController from './todo.controller';

const TodoComponent = {
  controller: TodoController,
  controllerAs: 'todo',
  template: `<div ng-repeat="task in todo.tasks"><h2>{{task.title}}{{task.description}}</h2></div>`
}

export default TodoComponent;
