define(['backbone', 'marionette', 'jquery', 'require'],function(Backbone){
  var App = new Backbone.Marionette.Application();

  App.startSubApp = function(appName, args){
    var currentApp = App.module(appName);

    if (App.currentApp === currentApp) return;
    if (App.currentApp) {
      App.currentApp.stop();
    }
    App.currentApp = currentApp;
    currentApp.start(args);
  };

  // Add modules.
  var modules = [
    'modules/user/main'
  ];

  require(modules, function(){
    App.start();
    Backbone.history.start();
  });

  return App;
});