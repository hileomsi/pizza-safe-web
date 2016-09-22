{
  class ProductListController{
    /* @Inject */
    constructor($scope){
      this.$scope = $scope;
      this.products = [
      ];

      this.getProducts();
    }

    getProducts(){
      console.log('getProducts');
      window.app.service('products')
      .find()
      .then((products) => {
        this.$scope.$apply(() => {
          console.log(products);
          this.products = products.map((product) => {
            console.log(product.price);
            product.price = `R$ ${product.price}`;
            return product;
          });

          ///
          this.products.push({
            name: 'X-burger chibata',
            price: 'R$ 20,00',
            description: 'Isso e muito bom serio msm, maravilhoso, huuumm que delicia',
            photo: 'http://www.sciam.com.br/noticias/img/um_x-burguer_duplo_pode_nao_ser_tao_ruim_para_o_coracao_1__2012-05-02152350.jpg',
            category: 'Small'
          });

          this.products.push({
            name: 'X-burger chibata',
            price: 'R$ 20,00',
            description: 'Isso e muito bom serio msm, maravilhoso, huuumm que delicia',
            photo: 'http://4.bp.blogspot.com/-Tg8LWop0Ows/UYhJLdtsBHI/AAAAAAAAA3E/yi47RJQ_IIg/s1600/como+fazer+x-burguer.jpg',
            category: 'Small'
          });
          console.log(this.products);
        })
      })
    }
  }

  ProductListController.$inject = ['$scope'];

  angular
    .module('app.productList')
    .controller('ProductListController', ProductListController);
}
