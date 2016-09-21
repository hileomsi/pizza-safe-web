{
  class LoginController{
    /* @Inject */
    constructor($scope, $state){
      this.$scope = $scope;
      this.$state = $state;
    }

    login(){
      this.$state.go('product-list');
      this.$scope.$emit('logged', true);
    }
  }

  LoginController.$inject = ['$scope', '$state'];

  angular
    .module('app.login')
    .controller('LoginController', LoginController);
}
