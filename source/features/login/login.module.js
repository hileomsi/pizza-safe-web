{
  const config = ($stateProvider) => {
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'login.view.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    });
  };

  angular
    .module('app.login',[])
    .config(['$stateProvider', config]);
}
