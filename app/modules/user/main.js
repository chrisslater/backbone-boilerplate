define(['app', 'backbone', 'marionette'], function(App, Backbone, Marionette){
  console.log(Backbone.Marionette);
  Backbone.Marionette.AppRouter.extend({
    routes : {
      "" : "userController"
    },
    userController: function(){
      return new require('app/modules/user/controllers/user');
    }
  });
});