{
  class LoginController{
    /* @Inject */
    constructor($scope, $state){
      this.$scope = $scope;
      this.$state = $state;
      //model
      this.user = {};
    }

    login(){
      const options = {
        query: this.user
      };

      console.log(options);

      window.app.service('users')
      .find(options)
      .then((users) => {
        if(users.length > 0){
          this.$state.go('product-list');
          this.$scope.$emit('logged', true);
        }else{
          alert('Email e/ou Senha invalidos');
        }
      });
    }
  }

  LoginController.$inject = ['$scope', '$state'];

  angular
    .module('app.login')
    .controller('LoginController', LoginController);
}
