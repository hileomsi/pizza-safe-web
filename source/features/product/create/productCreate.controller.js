{
  class ProductCreateController{
    constructor($state){
      this.$state = $state;
      this.product = {};
    }

    save(){
      console.log('Save Product');
      window.app.service('products')
      .create(this.product)
      .then(() => {
        alert('Produto inserido com sucesso!');
        this.$state.go('product-list');
      })
    }
  }

  ProductCreateController.$inject = ['$state'];

  angular
    .module('app.productCreate')
    .controller('ProductCreateController', ProductCreateController);
}
