{
  const config = ($stateProvider) => {
    $stateProvider.state('product-list', {
      url: '/product/list',
      templateUrl: 'productList.view.html',
      controller: 'ProductListController',
      controllerAs: 'vm'
    })
  };

  angular
    .module('app.productList', [])
    .config(['$stateProvider', config]);
}
