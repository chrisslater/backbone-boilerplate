define(['app', 'hbs!home/templates/home'], function(App, template){

  var Home = App.module('Home');

  var HomeLayout = Backbone.Marionette.LayoutView.extend({
    el: '#app',
    template: template
  });

  var homeLayout = new HomeLayout();

  // Home.on('stop', function(){
  //   homeLayout.destroy();
  // });

  return function(){
    homeLayout.render();
  };
});