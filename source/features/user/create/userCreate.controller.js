{
  class UserCreateController{
    constructor($state){
      this.$state = $state;
      this.user = {};
    }

    save(){
      console.log('Save User');
      window.app.service('users')
      .create(this.user)
      .then(() => {
        alert('Usuario cadastrado com sucesso');
        this.$this.state.go('login');
      })
    }
  }

  UserCreateController.$inject = ['$state'];

  angular
    .module('app.userCreate')
    .controller('UserCreateController', UserCreateController);
}
