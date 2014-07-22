define(['app', 'hbs!home/templates/home'], function(App, template){

  var HomeLayout = Backbone.Marionette.LayoutView.extend({
    template: template
  });

  return function(){
    App.main.show(new HomeLayout());
  };
});