{
  class ProductListController{
    constructor(){
      this.products = [
        {
          name: 'X-burger chibata',
          price: 'R$ 20,00',
          description: 'Isso e muito bom serio msm, maravilhoso, huuumm que delicia',
          photo: 'http://www.sciam.com.br/noticias/img/um_x-burguer_duplo_pode_nao_ser_tao_ruim_para_o_coracao_1__2012-05-02152350.jpg',
          category: 'Small'
        },
        {
          name: 'X-burger chibata',
          price: 'R$ 20,00',
          description: 'Isso e muito bom serio msm, maravilhoso, huuumm que delicia',
          photo: 'http://4.bp.blogspot.com/-Tg8LWop0Ows/UYhJLdtsBHI/AAAAAAAAA3E/yi47RJQ_IIg/s1600/como+fazer+x-burguer.jpg',
          category: 'Small'
        },
        {
          name: 'X-burger chibata',
          price: 'R$ 20,00',
          description: 'Isso e muito bom serio msm, maravilhoso, huuumm que delicia',
          photo: 'http://www.sciam.com.br/noticias/img/um_x-burguer_duplo_pode_nao_ser_tao_ruim_para_o_coracao_1__2012-05-02152350.jpg',
          category: 'Small'
        },
        {
          name: 'X-burger chibata',
          price: 'R$ 20,00',
          description: 'Isso e muito bom serio msm, maravilhoso, huuumm que delicia',
          photo: 'http://4.bp.blogspot.com/-Tg8LWop0Ows/UYhJLdtsBHI/AAAAAAAAA3E/yi47RJQ_IIg/s1600/como+fazer+x-burguer.jpg',
          category: 'Small'
        },
        {
          name: 'X-burger chibata',
          price: 'R$ 20,00',
          description: 'Isso e muito bom serio msm, maravilhoso, huuumm que delicia',
          photo: 'http://www.sciam.com.br/noticias/img/um_x-burguer_duplo_pode_nao_ser_tao_ruim_para_o_coracao_1__2012-05-02152350.jpg',
          category: 'Small'
        },
        {
          name: 'X-burger chibata',
          price: 'R$ 20,00',
          description: 'Isso e muito bom serio msm, maravilhoso, huuumm que delicia',
          photo: 'http://4.bp.blogspot.com/-Tg8LWop0Ows/UYhJLdtsBHI/AAAAAAAAA3E/yi47RJQ_IIg/s1600/como+fazer+x-burguer.jpg',
          category: 'Small'
        },{
          name: 'X-burger chibata',
          price: 'R$ 20,00',
          description: 'Isso e muito bom serio msm, maravilhoso, huuumm que delicia',
          photo: 'http://www.sciam.com.br/noticias/img/um_x-burguer_duplo_pode_nao_ser_tao_ruim_para_o_coracao_1__2012-05-02152350.jpg',
          category: 'Small'
        },
        {
          name: 'X-burger chibata',
          price: 'R$ 20,00',
          description: 'Isso e muito bom serio msm, maravilhoso, huuumm que delicia',
          photo: 'http://4.bp.blogspot.com/-Tg8LWop0Ows/UYhJLdtsBHI/AAAAAAAAA3E/yi47RJQ_IIg/s1600/como+fazer+x-burguer.jpg',
          category: 'Small'
        }
      ];
    }
  }

  angular
    .module('app.productList')
    .controller('ProductListController', ProductListController);
}
