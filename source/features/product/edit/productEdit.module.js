{
  const config = ($stateProvider) => {
    $stateProvider.state('product-edit',{
      url: '/product/edit',
      templateUrl: 'productEdit.view.html',
      controller: 'ProductEditController',
      controllerAs: 'vm'
    })
  };

  angular
    .module('app.productEdit', [])
    .config(['$stateProvider', config]);
}
