define(['backbone', 'marrionette', 'jquery', 'require'],function(Backbone){
  var App = new Backbone.Marrionette.Application();

  App.addRegions({
    app: '#app'
  });

  // Add any setup here.

  return App;
});