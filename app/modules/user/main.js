define(['app', 'user/routers/UserRouter'], function(App, UserRouter){
  return App.module('User', {
    startWithParent: false,
    define: function(User, App, Backbone){
      'use strict';

      // Makes the application aware of the user routing structure.
      App.addInitializer(function(){
        new UserRouter();
      });

      User.on('stop', function(){
        App.main.empty();
        App.aside.empty();
      });
    }
  });
});