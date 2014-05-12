define(['app', 'backbone', 'marionette', 'routeFilter'], function(App){
  return App.module('User', {
    startWithParent: false,
    define: function(User, App, Backbone, Marionette){
      'use strict';

      var Router = Backbone.Router.extend({
        routes: {
          "user/dashboard": "userDashboard"
        },
        before: function(){
          App.startSubApp('User');
        },
        userDashboard: function(){
          require(['modules/user/controllers/userController'], function(UserController){
            new UserController();
          });
        }
      });

      App.addInitializer(function(){
        var router = new Router();
      });
    }
  });
});