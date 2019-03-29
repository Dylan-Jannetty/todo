class TodoController {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.todos = [];
    this.boxShow = false;
    this.editorEnabled = false;
    this.priorityOptions = ['High', 'Low'];
  }
  
  $onInit () {
    this.$http({
      method: 'GET',
      url: '/tasks.json'
    })
    .then(res => {
      console.log(res.data)
      this.tasks = res.data
    })
    .catch(err => {
      console.log(err)
    })
  }
  getTotalTodos () {
  return this.todos.length;
  }
  addTodo () {
    this.todos.push({text:this.formTodoText});
    this.formTodoText = '';
    if(this.todos.text == "") {
      return;
    }
    console.log(this.todos);
  }
  deleteItem (task) {
    let item = this.todos.indexOf(task);
    this.todos.splice(item, 1);
  }
  enableEditor (task) {
    this.editorEnabled = true;
    this.editableText = this.todos.text;
  }
}
export default TodoController
