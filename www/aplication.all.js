"use strict";function _classCallCheck(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}angular.module("app.3dparty",["ui.router"]),angular.module("app.common",[]),angular.module("app.features",["app.login","app.productCreate","app.productEdit","app.productList","app.userCreate","app.home"]),angular.module("starter",["app.3dparty","app.common","app.features","ui.router"]).config(["$stateProvider",function(o){}]);var config=function(o){o.state("home",{url:"/home",templateUrl:"home.view.html",controller:"HomeController",controllerAs:"vm"})};angular.module("app.home",[]).config(["$stateProvider",config]);var config=function(o){o.state("login",{url:"/login",templateUrl:"login.view.html",controller:"LoginController",controllerAs:"vm"})};angular.module("app.login",[]).config(["$stateProvider",config]);var config=function(o){o.state("product-create",{url:"/product/create",templateUrl:"productCreate.view.html",controller:"ProductCreateController",controllerAs:"vm"})};angular.module("app.productCreate",[]).config(["$stateProvider",config]);var config=function(o){o.state("product-edit",{url:"/product/edit",templateUrl:"productEdit.view.html",controller:"ProductEditController",controllerAs:"vm"})};angular.module("app.productEdit",[]).config(["$stateProvider",config]);var config=function(o){o.state("product-list",{url:"/product/list",templateUrl:"productList.view.html",controller:"ProductListController",controllerAs:"vm"})};angular.module("app.productList",[]).config(["$stateProvider",config]);var config=function(o){o.state("user-create",{url:"/user/create",templateUrl:"userCreate.view.html",controller:"UserCreateController",controllerAs:"vm"})};angular.module("app.userCreate",[]).config(["$stateProvider",config]);var _createClass=function(){function o(o,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}return function(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}}(),HomeController=function(){function o(e,r){_classCallCheck(this,o),this.$scope=e,this.$state=r}return _createClass(o,[{key:"welcome",value:function(){this.$scope.$emit("menu",!0),this.$state.go("product-list")}}]),o}();HomeController.$inject=["$scope","$state"],angular.module("app.home").controller("HomeController",HomeController);var _createClass=function(){function o(o,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}return function(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}}(),LoginController=function(){function o(e,r){_classCallCheck(this,o),this.$scope=e,this.$state=r}return _createClass(o,[{key:"login",value:function(){this.$state.go("product-list"),this.$scope.$emit("logged",!0)}}]),o}();LoginController.$inject=["$scope","$state"],angular.module("app.login").controller("LoginController",LoginController);var _createClass=function(){function o(o,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}return function(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}}(),MenuController=function(){function o(e){_classCallCheck(this,o),this.$rootScope=e,this.isMenu=!1,this.isLogged=!1,this.registerEvents()}return _createClass(o,[{key:"registerEvents",value:function(){var o=this;console.log("registerEvents"),this.$rootScope.$on("menu",function(e){console.log("menu"),o.isMenu=e}),this.$rootScope.$on("logged",function(e){o.isLogged=e})}}]),o}();MenuController.$inject=["$rootScope"],angular.module("starter").controller("MenuController",MenuController);var _createClass=function(){function o(o,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}return function(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}}(),ProductCreateController=function(){function o(){_classCallCheck(this,o),this.product={}}return _createClass(o,[{key:"save",value:function(){}}]),o}();angular.module("app.productCreate").controller("ProductCreateController",ProductCreateController);var ProductEditController=function o(){_classCallCheck(this,o)};angular.module("app.productEdit").controller("ProductEditController",ProductEditController);var ProductListController=function o(){_classCallCheck(this,o),this.products=[{name:"X-burger chibata",price:"R$ 20,00",description:"Isso e muito bom serio msm, maravilhoso, huuumm que delicia",photo:"http://www.sciam.com.br/noticias/img/um_x-burguer_duplo_pode_nao_ser_tao_ruim_para_o_coracao_1__2012-05-02152350.jpg",category:"Small"},{name:"X-burger chibata",price:"R$ 20,00",description:"Isso e muito bom serio msm, maravilhoso, huuumm que delicia",photo:"http://4.bp.blogspot.com/-Tg8LWop0Ows/UYhJLdtsBHI/AAAAAAAAA3E/yi47RJQ_IIg/s1600/como+fazer+x-burguer.jpg",category:"Small"},{name:"X-burger chibata",price:"R$ 20,00",description:"Isso e muito bom serio msm, maravilhoso, huuumm que delicia",photo:"http://www.sciam.com.br/noticias/img/um_x-burguer_duplo_pode_nao_ser_tao_ruim_para_o_coracao_1__2012-05-02152350.jpg",category:"Small"},{name:"X-burger chibata",price:"R$ 20,00",description:"Isso e muito bom serio msm, maravilhoso, huuumm que delicia",photo:"http://4.bp.blogspot.com/-Tg8LWop0Ows/UYhJLdtsBHI/AAAAAAAAA3E/yi47RJQ_IIg/s1600/como+fazer+x-burguer.jpg",category:"Small"},{name:"X-burger chibata",price:"R$ 20,00",description:"Isso e muito bom serio msm, maravilhoso, huuumm que delicia",photo:"http://www.sciam.com.br/noticias/img/um_x-burguer_duplo_pode_nao_ser_tao_ruim_para_o_coracao_1__2012-05-02152350.jpg",category:"Small"},{name:"X-burger chibata",price:"R$ 20,00",description:"Isso e muito bom serio msm, maravilhoso, huuumm que delicia",photo:"http://4.bp.blogspot.com/-Tg8LWop0Ows/UYhJLdtsBHI/AAAAAAAAA3E/yi47RJQ_IIg/s1600/como+fazer+x-burguer.jpg",category:"Small"},{name:"X-burger chibata",price:"R$ 20,00",description:"Isso e muito bom serio msm, maravilhoso, huuumm que delicia",photo:"http://www.sciam.com.br/noticias/img/um_x-burguer_duplo_pode_nao_ser_tao_ruim_para_o_coracao_1__2012-05-02152350.jpg",category:"Small"},{name:"X-burger chibata",price:"R$ 20,00",description:"Isso e muito bom serio msm, maravilhoso, huuumm que delicia",photo:"http://4.bp.blogspot.com/-Tg8LWop0Ows/UYhJLdtsBHI/AAAAAAAAA3E/yi47RJQ_IIg/s1600/como+fazer+x-burguer.jpg",category:"Small"}]};angular.module("app.productList").controller("ProductListController",ProductListController);var _createClass=function(){function o(o,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}return function(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}}(),UserCreateController=function(){function o(){_classCallCheck(this,o),this.user={}}return _createClass(o,[{key:"save",value:function(){alert("save")}}]),o}();angular.module("app.userCreate").controller("UserCreateController",UserCreateController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC4zZHBhcnR5LmpzIiwiYXBwLmNvbW1vbi5qcyIsImFwcC5mZWF0dXJlcy5qcyIsImFwcC5zdGFydGVyLmpzIiwiZmVhdHVyZXMvaG9tZS9ob21lLm1vZHVsZS5qcyIsImZlYXR1cmVzL2xvZ2luL2xvZ2luLm1vZHVsZS5qcyIsImZlYXR1cmVzL3Byb2R1Y3QvY3JlYXRlL3Byb2R1Y3RDcmVhdGUubW9kdWxlLmpzIiwiZmVhdHVyZXMvcHJvZHVjdC9lZGl0L3Byb2R1Y3RFZGl0Lm1vZHVsZS5qcyIsImZlYXR1cmVzL3Byb2R1Y3QvbGlzdC9wcm9kdWN0TGlzdC5tb2R1bGUuanMiLCJmZWF0dXJlcy91c2VyL2NyZWF0ZS91c2VyQ3JlYXRlLm1vZHVsZS5qcyIsImZlYXR1cmVzL2hvbWUvaG9tZS5jb250cm9sbGVyLmpzIiwiZmVhdHVyZXMvbG9naW4vbG9naW4uY29udHJvbGxlci5qcyIsImZlYXR1cmVzL21lbnUvbWVudS5jb250cm9sbGVyLmpzIiwiZmVhdHVyZXMvcHJvZHVjdC9jcmVhdGUvcHJvZHVjdENyZWF0ZS5jb250cm9sbGVyLmpzIiwiZmVhdHVyZXMvcHJvZHVjdC9lZGl0L3Byb2R1Y3RFZGl0LmNvbnRyb2xsZXIuanMiLCJmZWF0dXJlcy9wcm9kdWN0L2xpc3QvcHJvZHVjdExpc3QuY29udHJvbGxlci5qcyIsImZlYXR1cmVzL3VzZXIvY3JlYXRlL3VzZXJDcmVhdGUuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsImNvbnRyb2xsZXJBcyIsIkhvbWVDb250cm9sbGVyIiwiJHNjb3BlIiwiJHN0YXRlIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiJGVtaXQiLCJnbyIsIiRpbmplY3QiLCJMb2dpbkNvbnRyb2xsZXIiLCJNZW51Q29udHJvbGxlciIsIiRyb290U2NvcGUiLCJpc01lbnUiLCJpc0xvZ2dlZCIsInJlZ2lzdGVyRXZlbnRzIiwiX3RoaXMiLCJjb25zb2xlIiwibG9nIiwiJG9uIiwiUHJvZHVjdENyZWF0ZUNvbnRyb2xsZXIiLCJwcm9kdWN0IiwiUHJvZHVjdEVkaXRDb250cm9sbGVyIiwiUHJvZHVjdExpc3RDb250cm9sbGVyIiwicHJvZHVjdHMiLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInBob3RvIiwiY2F0ZWdvcnkiLCJVc2VyQ3JlYXRlQ29udHJvbGxlciIsInVzZXIiLCJhbGVydCJdLCJtYXBwaW5ncyI6Iml3QkFDRUEsUUFBUUMsT0FBTyxlQUNiLGNDREFELFFBQVFDLE9BQU8saUJDQWpCRCxRQUFRQyxPQUFPLGdCQUNiLFlBRUEsb0JBQ0Esa0JBQ0Esa0JBRUEsaUJBRUEsYUNURkQsUUFBUUMsT0FBTyxXQUNiLGNBQ0EsYUFDQSxlQUNBLGNBRURDLFFBQVEsaUJBQWlCLFNBQUNDLE1DTjNCLElBQU1ELFFBQVMsU0FBQ0MsR0FDZEEsRUFBZUMsTUFBTSxRQUNuQkMsSUFBSyxRQUNMQyxZQUFhLGlCQUNiQyxXQUFZLGlCQUNaQyxhQUFjLE9BSWxCUixTQUNHQyxPQUFPLGVBQ1BDLFFBQVEsaUJBQWtCQSxRQ1g3QixJQUFNQSxRQUFTLFNBQUNDLEdBQ2RBLEVBQWVDLE1BQU0sU0FDbkJDLElBQUssU0FDTEMsWUFBYSxrQkFDYkMsV0FBWSxrQkFDWkMsYUFBYyxPQUlsQlIsU0FDR0MsT0FBTyxnQkFDUEMsUUFBUSxpQkFBa0JBLFFDWDdCLElBQU1BLFFBQVMsU0FBQ0MsR0FDWkEsRUFBZUMsTUFBTSxrQkFDbkJDLElBQUssa0JBQ0xDLFlBQWEsMEJBQ2JDLFdBQVksMEJBQ1pDLGFBQWMsT0FJcEJSLFNBQ0dDLE9BQU8sd0JBQ1BDLFFBQVEsaUJBQWtCQSxRQ1g3QixJQUFNQSxRQUFTLFNBQUNDLEdBQ2RBLEVBQWVDLE1BQU0sZ0JBQ25CQyxJQUFLLGdCQUNMQyxZQUFhLHdCQUNiQyxXQUFZLHdCQUNaQyxhQUFjLE9BSWxCUixTQUNHQyxPQUFPLHNCQUNQQyxRQUFRLGlCQUFrQkEsUUNYN0IsSUFBTUEsUUFBUyxTQUFDQyxHQUNkQSxFQUFlQyxNQUFNLGdCQUNuQkMsSUFBSyxnQkFDTEMsWUFBYSx3QkFDYkMsV0FBWSx3QkFDWkMsYUFBYyxPQUlsQlIsU0FDR0MsT0FBTyxzQkFDUEMsUUFBUSxpQkFBa0JBLFFDWDdCLElBQU1BLFFBQVMsU0FBQ0MsR0FDZEEsRUFBZUMsTUFBTSxlQUNuQkMsSUFBSyxlQUNMQyxZQUFhLHVCQUNiQyxXQUFZLHVCQUNaQyxhQUFjLE9BSWxCUixTQUNHQyxPQUFPLHFCQUNQQyxRQUFRLGlCQUFrQkEsNlFDWHZCTyxlQURSLFdBRUksUUFBQUEsR0FBWUMsRUFBUUMsR0FBT0MsZ0JBQUFDLEtBQUFKLEdBQ3pCSSxLQUFLSCxPQUFTQSxFQUNkRyxLQUFLRixPQUFTQSxFQUpwQixNQUFBRyxjQUFBTCxJQUFBTSxJQUFBLFVBQUFDLE1BQUEsV0FTTUgsS0FBS0gsT0FBT08sTUFBTSxRQUFRLEdBQzFCSixLQUFLRixPQUFPTyxHQUFHLG9CQVZyQlQsSUFjRUEsZ0JBQWVVLFNBQVcsU0FBVSxVQUVwQ25CLFFBQ0dDLE9BQU8sWUFDUE0sV0FBVyxpQkFBa0JFLG9SQ2pCMUJXLGdCQURSLFdBR0ksUUFBQUEsR0FBWVYsRUFBUUMsR0FBT0MsZ0JBQUFDLEtBQUFPLEdBQ3pCUCxLQUFLSCxPQUFTQSxFQUNkRyxLQUFLRixPQUFTQSxFQUxwQixNQUFBRyxjQUFBTSxJQUFBTCxJQUFBLFFBQUFDLE1BQUEsV0FTTUgsS0FBS0YsT0FBT08sR0FBRyxnQkFDZkwsS0FBS0gsT0FBT08sTUFBTSxVQUFVLE9BVmxDRyxJQWNFQSxpQkFBZ0JELFNBQVcsU0FBVSxVQUVyQ25CLFFBQ0dDLE9BQU8sYUFDUE0sV0FBVyxrQkFBbUJhLHFSQ2pCM0JDLGVBRFIsV0FHSSxRQUFBQSxHQUFZQyxHQUFXVixnQkFBQUMsS0FBQVEsR0FDckJSLEtBQUtTLFdBQWFBLEVBQ2xCVCxLQUFLVSxRQUFTLEVBQ2RWLEtBQUtXLFVBQVUsRUFFZlgsS0FBS1ksaUJBUlgsTUFBQVgsY0FBQU8sSUFBQU4sSUFBQSxpQkFBQUMsTUFBQSxXQVdvQixHQUFBVSxHQUFBYixJQUNkYyxTQUFRQyxJQUFJLGtCQUVaZixLQUFLUyxXQUFXTyxJQUFJLE9BQVEsU0FBQ04sR0FDM0JJLFFBQVFDLElBQUksUUFDWkYsRUFBS0gsT0FBU0EsSUFHaEJWLEtBQUtTLFdBQVdPLElBQUksU0FBVSxTQUFDTCxHQUM3QkUsRUFBS0YsU0FBV0EsUUFwQnhCSCxJQXlCRUEsZ0JBQWVGLFNBQVcsY0FFMUJuQixRQUNHQyxPQUFPLFdBQ1BNLFdBQVcsaUJBQWtCYyxvUkM1QjFCUyx3QkFEUixXQUVJLFFBQUFBLEtBQWFsQixnQkFBQUMsS0FBQWlCLEdBQ1hqQixLQUFLa0IsV0FIWCxNQUFBakIsY0FBQWdCLElBQUFmLElBQUEsT0FBQUMsTUFBQSxnQkFBQWMsSUFXRTlCLFNBQ0dDLE9BQU8scUJBQ1BNLFdBQVcsMEJBQTJCdUIsd0JDYjNDLElBQ1FFLHVCQUNKLFFBQUFBLEtBQWFwQixnQkFBQUMsS0FBQW1CLEdBS2ZoQyxTQUNHQyxPQUFPLG1CQUNQTSxXQUFXLHdCQUF5QnlCLHNCQ1R6QyxJQUNRQyx1QkFDSixRQUFBQSxLQUFhckIsZ0JBQUFDLEtBQUFvQixHQUNYcEIsS0FBS3FCLFdBRURDLEtBQU0sbUJBQ05DLE1BQU8sV0FDUEMsWUFBYSw4REFDYkMsTUFBTyx1SEFDUEMsU0FBVSxVQUdWSixLQUFNLG1CQUNOQyxNQUFPLFdBQ1BDLFlBQWEsOERBQ2JDLE1BQU8sMkdBQ1BDLFNBQVUsVUFHVkosS0FBTSxtQkFDTkMsTUFBTyxXQUNQQyxZQUFhLDhEQUNiQyxNQUFPLHVIQUNQQyxTQUFVLFVBR1ZKLEtBQU0sbUJBQ05DLE1BQU8sV0FDUEMsWUFBYSw4REFDYkMsTUFBTywyR0FDUEMsU0FBVSxVQUdWSixLQUFNLG1CQUNOQyxNQUFPLFdBQ1BDLFlBQWEsOERBQ2JDLE1BQU8sdUhBQ1BDLFNBQVUsVUFHVkosS0FBTSxtQkFDTkMsTUFBTyxXQUNQQyxZQUFhLDhEQUNiQyxNQUFPLDJHQUNQQyxTQUFVLFVBRVZKLEtBQU0sbUJBQ05DLE1BQU8sV0FDUEMsWUFBYSw4REFDYkMsTUFBTyx1SEFDUEMsU0FBVSxVQUdWSixLQUFNLG1CQUNOQyxNQUFPLFdBQ1BDLFlBQWEsOERBQ2JDLE1BQU8sMkdBQ1BDLFNBQVUsVUFNbEJ2QyxTQUNHQyxPQUFPLG1CQUNQTSxXQUFXLHdCQUF5QjBCLDJSQ2hFakNPLHFCQURSLFdBRUksUUFBQUEsS0FBYTVCLGdCQUFBQyxLQUFBMkIsR0FDWDNCLEtBQUs0QixRQUhYLE1BQUEzQixjQUFBMEIsSUFBQXpCLElBQUEsT0FBQUMsTUFBQSxXQU9NMEIsTUFBTSxZQVBaRixJQVdFeEMsU0FDR0MsT0FBTyxrQkFDUE0sV0FBVyx1QkFBd0JpQyIsImZpbGUiOiJhcGxpY2F0aW9uLmFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIntcbiAgYW5ndWxhci5tb2R1bGUoJ2FwcC4zZHBhcnR5JyxbXG4gICAgJ3VpLnJvdXRlcidcbiAgXSk7XG59XG4iLCJ7XG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcC5jb21tb24nLCBbXSk7XG59XG4iLCJ7XG4gIGFuZ3VsYXIubW9kdWxlKCdhcHAuZmVhdHVyZXMnLCBbXG4gICAgJ2FwcC5sb2dpbicsXG5cbiAgICAnYXBwLnByb2R1Y3RDcmVhdGUnLFxuICAgICdhcHAucHJvZHVjdEVkaXQnLFxuICAgICdhcHAucHJvZHVjdExpc3QnLFxuXG4gICAgJ2FwcC51c2VyQ3JlYXRlJyxcblxuICAgICdhcHAuaG9tZSdcbiAgXSk7XG59XG4iLCJ7XG4gIGFuZ3VsYXIubW9kdWxlKCdzdGFydGVyJywgW1xuICAgICdhcHAuM2RwYXJ0eScsXG4gICAgJ2FwcC5jb21tb24nLFxuICAgICdhcHAuZmVhdHVyZXMnLFxuICAgICd1aS5yb3V0ZXInXG4gIF0pXG4gIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsKCRzdGF0ZVByb3ZpZGVyKSA9PiB7XG4gIH1dKTtcbn1cbiIsIntcbiAgY29uc3QgY29uZmlnID0gKCRzdGF0ZVByb3ZpZGVyKSA9PiB7XG4gICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICB1cmw6ICcvaG9tZScsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2hvbWUudmlldy5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9KTtcbiAgfVxuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdhcHAuaG9tZScsIFtdKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGNvbmZpZ10pO1xufVxuIiwie1xuICBjb25zdCBjb25maWcgPSAoJHN0YXRlUHJvdmlkZXIpID0+IHtcbiAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnbG9naW4nLCB7XG4gICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdsb2dpbi52aWV3Lmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9KTtcbiAgfTtcblxuICBhbmd1bGFyXG4gICAgLm1vZHVsZSgnYXBwLmxvZ2luJyxbXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBjb25maWddKTtcbn1cbiIsIntcbiAgY29uc3QgY29uZmlnID0gKCRzdGF0ZVByb3ZpZGVyKSA9PiB7XG4gICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgncHJvZHVjdC1jcmVhdGUnLCB7XG4gICAgICAgIHVybDogJy9wcm9kdWN0L2NyZWF0ZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncHJvZHVjdENyZWF0ZS52aWV3Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUHJvZHVjdENyZWF0ZUNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgIH0pXG4gIH07XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FwcC5wcm9kdWN0Q3JlYXRlJywgW10pXG4gICAgLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgY29uZmlnXSk7XG59XG4iLCJ7XG4gIGNvbnN0IGNvbmZpZyA9ICgkc3RhdGVQcm92aWRlcikgPT4ge1xuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdwcm9kdWN0LWVkaXQnLHtcbiAgICAgIHVybDogJy9wcm9kdWN0L2VkaXQnLFxuICAgICAgdGVtcGxhdGVVcmw6ICdwcm9kdWN0RWRpdC52aWV3Lmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ1Byb2R1Y3RFZGl0Q29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9KVxuICB9O1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdhcHAucHJvZHVjdEVkaXQnLCBbXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBjb25maWddKTtcbn1cbiIsIntcbiAgY29uc3QgY29uZmlnID0gKCRzdGF0ZVByb3ZpZGVyKSA9PiB7XG4gICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ3Byb2R1Y3QtbGlzdCcsIHtcbiAgICAgIHVybDogJy9wcm9kdWN0L2xpc3QnLFxuICAgICAgdGVtcGxhdGVVcmw6ICdwcm9kdWN0TGlzdC52aWV3Lmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ1Byb2R1Y3RMaXN0Q29udHJvbGxlcicsXG4gICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9KVxuICB9O1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdhcHAucHJvZHVjdExpc3QnLCBbXSlcbiAgICAuY29uZmlnKFsnJHN0YXRlUHJvdmlkZXInLCBjb25maWddKTtcbn1cbiIsIntcbiAgY29uc3QgY29uZmlnID0gKCRzdGF0ZVByb3ZpZGVyKSA9PiB7XG4gICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ3VzZXItY3JlYXRlJywge1xuICAgICAgdXJsOiAnL3VzZXIvY3JlYXRlJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAndXNlckNyZWF0ZS52aWV3Lmh0bWwnLFxuICAgICAgY29udHJvbGxlcjogJ1VzZXJDcmVhdGVDb250cm9sbGVyJyxcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH0pO1xuICB9O1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdhcHAudXNlckNyZWF0ZScsIFtdKVxuICAgIC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsIGNvbmZpZ10pO1xufVxuIiwie1xuICBjbGFzcyBIb21lQ29udHJvbGxlcntcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRzdGF0ZSl7XG4gICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgIHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuICAgIH1cblxuICAgIHdlbGNvbWUoKXtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgdGhpcy4kc2NvcGUuJGVtaXQoJ21lbnUnLCB0cnVlKTtcbiAgICAgIHRoaXMuJHN0YXRlLmdvKCdwcm9kdWN0LWxpc3QnKTtcbiAgICB9XG4gIH1cblxuICBIb21lQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHN0YXRlJ107XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FwcC5ob21lJylcbiAgICAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBIb21lQ29udHJvbGxlcik7XG59XG4iLCJ7XG4gIGNsYXNzIExvZ2luQ29udHJvbGxlcntcbiAgICAvKiBASW5qZWN0ICovXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkc3RhdGUpe1xuICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICB9XG5cbiAgICBsb2dpbigpe1xuICAgICAgdGhpcy4kc3RhdGUuZ28oJ3Byb2R1Y3QtbGlzdCcpO1xuICAgICAgdGhpcy4kc2NvcGUuJGVtaXQoJ2xvZ2dlZCcsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIExvZ2luQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHN0YXRlJ107XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FwcC5sb2dpbicpXG4gICAgLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIExvZ2luQ29udHJvbGxlcik7XG59XG4iLCJ7XG4gIGNsYXNzIE1lbnVDb250cm9sbGVye1xuXG4gICAgY29uc3RydWN0b3IoJHJvb3RTY29wZSl7XG4gICAgICB0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xuICAgICAgdGhpcy5pc01lbnUgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNMb2dnZWQ9IGZhbHNlO1xuXG4gICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFdmVudHMoKXtcbiAgICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlckV2ZW50cycpO1xuXG4gICAgICB0aGlzLiRyb290U2NvcGUuJG9uKCdtZW51JywgKGlzTWVudSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVudScpO1xuICAgICAgICB0aGlzLmlzTWVudSA9IGlzTWVudTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLiRyb290U2NvcGUuJG9uKCdsb2dnZWQnLCAoaXNMb2dnZWQpID0+IHtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZCA9IGlzTG9nZ2VkO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBNZW51Q29udHJvbGxlci4kaW5qZWN0ID0gWyckcm9vdFNjb3BlJ107XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ3N0YXJ0ZXInKVxuICAgIC5jb250cm9sbGVyKCdNZW51Q29udHJvbGxlcicsIE1lbnVDb250cm9sbGVyKTtcbn1cbiIsIntcbiAgY2xhc3MgUHJvZHVjdENyZWF0ZUNvbnRyb2xsZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgIHRoaXMucHJvZHVjdCA9IHt9O1xuICAgIH1cblxuICAgIHNhdmUoKXtcbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdhcHAucHJvZHVjdENyZWF0ZScpXG4gICAgLmNvbnRyb2xsZXIoJ1Byb2R1Y3RDcmVhdGVDb250cm9sbGVyJywgUHJvZHVjdENyZWF0ZUNvbnRyb2xsZXIpO1xufVxuIiwie1xuICBjbGFzcyBQcm9kdWN0RWRpdENvbnRyb2xsZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgIH1cbiAgfVxuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdhcHAucHJvZHVjdEVkaXQnKVxuICAgIC5jb250cm9sbGVyKCdQcm9kdWN0RWRpdENvbnRyb2xsZXInLCBQcm9kdWN0RWRpdENvbnRyb2xsZXIpO1xufVxuIiwie1xuICBjbGFzcyBQcm9kdWN0TGlzdENvbnRyb2xsZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnWC1idXJnZXIgY2hpYmF0YScsXG4gICAgICAgICAgcHJpY2U6ICdSJCAyMCwwMCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdJc3NvIGUgbXVpdG8gYm9tIHNlcmlvIG1zbSwgbWFyYXZpbGhvc28sIGh1dXVtbSBxdWUgZGVsaWNpYScsXG4gICAgICAgICAgcGhvdG86ICdodHRwOi8vd3d3LnNjaWFtLmNvbS5ici9ub3RpY2lhcy9pbWcvdW1feC1idXJndWVyX2R1cGxvX3BvZGVfbmFvX3Nlcl90YW9fcnVpbV9wYXJhX29fY29yYWNhb18xX18yMDEyLTA1LTAyMTUyMzUwLmpwZycsXG4gICAgICAgICAgY2F0ZWdvcnk6ICdTbWFsbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdYLWJ1cmdlciBjaGliYXRhJyxcbiAgICAgICAgICBwcmljZTogJ1IkIDIwLDAwJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0lzc28gZSBtdWl0byBib20gc2VyaW8gbXNtLCBtYXJhdmlsaG9zbywgaHV1dW1tIHF1ZSBkZWxpY2lhJyxcbiAgICAgICAgICBwaG90bzogJ2h0dHA6Ly80LmJwLmJsb2dzcG90LmNvbS8tVGc4TFdvcDBPd3MvVVloSkxkdHNCSEkvQUFBQUFBQUFBM0UveWk0N1JKUV9JSWcvczE2MDAvY29tbytmYXplcit4LWJ1cmd1ZXIuanBnJyxcbiAgICAgICAgICBjYXRlZ29yeTogJ1NtYWxsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1gtYnVyZ2VyIGNoaWJhdGEnLFxuICAgICAgICAgIHByaWNlOiAnUiQgMjAsMDAnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSXNzbyBlIG11aXRvIGJvbSBzZXJpbyBtc20sIG1hcmF2aWxob3NvLCBodXV1bW0gcXVlIGRlbGljaWEnLFxuICAgICAgICAgIHBob3RvOiAnaHR0cDovL3d3dy5zY2lhbS5jb20uYnIvbm90aWNpYXMvaW1nL3VtX3gtYnVyZ3Vlcl9kdXBsb19wb2RlX25hb19zZXJfdGFvX3J1aW1fcGFyYV9vX2NvcmFjYW9fMV9fMjAxMi0wNS0wMjE1MjM1MC5qcGcnLFxuICAgICAgICAgIGNhdGVnb3J5OiAnU21hbGwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnWC1idXJnZXIgY2hpYmF0YScsXG4gICAgICAgICAgcHJpY2U6ICdSJCAyMCwwMCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdJc3NvIGUgbXVpdG8gYm9tIHNlcmlvIG1zbSwgbWFyYXZpbGhvc28sIGh1dXVtbSBxdWUgZGVsaWNpYScsXG4gICAgICAgICAgcGhvdG86ICdodHRwOi8vNC5icC5ibG9nc3BvdC5jb20vLVRnOExXb3AwT3dzL1VZaEpMZHRzQkhJL0FBQUFBQUFBQTNFL3lpNDdSSlFfSUlnL3MxNjAwL2NvbW8rZmF6ZXIreC1idXJndWVyLmpwZycsXG4gICAgICAgICAgY2F0ZWdvcnk6ICdTbWFsbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdYLWJ1cmdlciBjaGliYXRhJyxcbiAgICAgICAgICBwcmljZTogJ1IkIDIwLDAwJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0lzc28gZSBtdWl0byBib20gc2VyaW8gbXNtLCBtYXJhdmlsaG9zbywgaHV1dW1tIHF1ZSBkZWxpY2lhJyxcbiAgICAgICAgICBwaG90bzogJ2h0dHA6Ly93d3cuc2NpYW0uY29tLmJyL25vdGljaWFzL2ltZy91bV94LWJ1cmd1ZXJfZHVwbG9fcG9kZV9uYW9fc2VyX3Rhb19ydWltX3BhcmFfb19jb3JhY2FvXzFfXzIwMTItMDUtMDIxNTIzNTAuanBnJyxcbiAgICAgICAgICBjYXRlZ29yeTogJ1NtYWxsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1gtYnVyZ2VyIGNoaWJhdGEnLFxuICAgICAgICAgIHByaWNlOiAnUiQgMjAsMDAnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSXNzbyBlIG11aXRvIGJvbSBzZXJpbyBtc20sIG1hcmF2aWxob3NvLCBodXV1bW0gcXVlIGRlbGljaWEnLFxuICAgICAgICAgIHBob3RvOiAnaHR0cDovLzQuYnAuYmxvZ3Nwb3QuY29tLy1UZzhMV29wME93cy9VWWhKTGR0c0JISS9BQUFBQUFBQUEzRS95aTQ3UkpRX0lJZy9zMTYwMC9jb21vK2ZhemVyK3gtYnVyZ3Vlci5qcGcnLFxuICAgICAgICAgIGNhdGVnb3J5OiAnU21hbGwnXG4gICAgICAgIH0se1xuICAgICAgICAgIG5hbWU6ICdYLWJ1cmdlciBjaGliYXRhJyxcbiAgICAgICAgICBwcmljZTogJ1IkIDIwLDAwJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0lzc28gZSBtdWl0byBib20gc2VyaW8gbXNtLCBtYXJhdmlsaG9zbywgaHV1dW1tIHF1ZSBkZWxpY2lhJyxcbiAgICAgICAgICBwaG90bzogJ2h0dHA6Ly93d3cuc2NpYW0uY29tLmJyL25vdGljaWFzL2ltZy91bV94LWJ1cmd1ZXJfZHVwbG9fcG9kZV9uYW9fc2VyX3Rhb19ydWltX3BhcmFfb19jb3JhY2FvXzFfXzIwMTItMDUtMDIxNTIzNTAuanBnJyxcbiAgICAgICAgICBjYXRlZ29yeTogJ1NtYWxsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1gtYnVyZ2VyIGNoaWJhdGEnLFxuICAgICAgICAgIHByaWNlOiAnUiQgMjAsMDAnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSXNzbyBlIG11aXRvIGJvbSBzZXJpbyBtc20sIG1hcmF2aWxob3NvLCBodXV1bW0gcXVlIGRlbGljaWEnLFxuICAgICAgICAgIHBob3RvOiAnaHR0cDovLzQuYnAuYmxvZ3Nwb3QuY29tLy1UZzhMV29wME93cy9VWWhKTGR0c0JISS9BQUFBQUFBQUEzRS95aTQ3UkpRX0lJZy9zMTYwMC9jb21vK2ZhemVyK3gtYnVyZ3Vlci5qcGcnLFxuICAgICAgICAgIGNhdGVnb3J5OiAnU21hbGwnXG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FwcC5wcm9kdWN0TGlzdCcpXG4gICAgLmNvbnRyb2xsZXIoJ1Byb2R1Y3RMaXN0Q29udHJvbGxlcicsIFByb2R1Y3RMaXN0Q29udHJvbGxlcik7XG59XG4iLCJ7XG4gIGNsYXNzIFVzZXJDcmVhdGVDb250cm9sbGVye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICB0aGlzLnVzZXIgPSB7fTtcbiAgICB9XG5cbiAgICBzYXZlKCl7XG4gICAgICBhbGVydCgnc2F2ZScpO1xuICAgIH1cbiAgfVxuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCdhcHAudXNlckNyZWF0ZScpXG4gICAgLmNvbnRyb2xsZXIoJ1VzZXJDcmVhdGVDb250cm9sbGVyJywgVXNlckNyZWF0ZUNvbnRyb2xsZXIpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
