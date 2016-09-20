{
  const config = ($stateProvider) => {
      $stateProvider.state('product-create', {
        url: '/product/create',
        templateUrl: 'productCreate.view.html',
        controller: 'ProductCreateController',
        controllerAs: 'vm'
      })
  };

  angular
    .module('app.productCreate', [])
    .config(['$stateProvider', config]);
}
