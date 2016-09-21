{
  class HomeController{
    constructor($scope, $state){
      this.$scope = $scope;
      this.$state = $state;
    }

    welcome(){
      debugger;
      this.$scope.$emit('menu', true);
      this.$state.go('product-list');
    }
  }

  HomeController.$inject = ['$scope', '$state'];

  angular
    .module('app.home')
    .controller('HomeController', HomeController);
}
