{
  const config = ($stateProvider) => {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home.view.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    });
  }

  angular
    .module('app.home', [])
    .config(['$stateProvider', config]);
}
