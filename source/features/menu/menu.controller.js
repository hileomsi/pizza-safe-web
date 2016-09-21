{
  class MenuController{

    constructor($rootScope){
      this.$rootScope = $rootScope;
      this.isMenu = false;
      this.isLogged = false;

      this.registerEvents();
    }

    registerEvents(){
      console.log('registerEvents');

      this.$rootScope.$on('menu', (isMenu) => {
        console.log('menu');

        this.isMenu = isMenu;
      });

      this.$rootScope.$on('logged', (isLogged) => {
        this.isLogged = isLogged;
      })
    }
  }

  MenuController.$inject = ['$rootScope'];

  angular
    .module('starter')
    .controller('MenuController', MenuController);
}
