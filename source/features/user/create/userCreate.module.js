{
  const config = ($stateProvider) => {
    $stateProvider.state('user-create', {
      url: '/user/create',
      templateUrl: 'userCreate.view.html',
      controller: 'UserCreateController',
      controllerAs: 'vm'
    });
  };

  angular
    .module('app.userCreate', [])
    .config(['$stateProvider', config]);
}
