define(['backbone', 'jquery'],function(Backbone, $){
  var App = {};

  // Add global event handler to App.
  _.extend(App, Backbone.Events);

  App.start = function(){
    console.log('App is ready to start');
  };
  return App;
});