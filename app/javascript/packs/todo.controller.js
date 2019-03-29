class TodoController {
  constructor($http) {
    'ngInject';
    this.$http = $http;
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
}
export default TodoController
