{
  class UserCreateController{
    constructor(){
      this.user = {};
    }

    save(){
      alert('save');
    }
  }

  angular
    .module('app.userCreate')
    .controller('UserCreateController', UserCreateController);
}
