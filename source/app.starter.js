{
  const run = () => {
    var socket = io('http://192.168.25.162:3030');
    var app = feathers()
      .configure(feathers.hooks())
      .configure(feathers.socketio(socket));

    window.app = app;
    console.log(socket);
    console.log(app);
    console.log('hello world');
};

  angular.module('starter', [
    'app.3dparty',
    'app.common',
    'app.features',
    'ui.router'
  ])
  .config(['$stateProvider',($stateProvider) => {
  }])
  .run(run);
}
