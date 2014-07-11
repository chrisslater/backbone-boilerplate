define(['app', 'user/routers/userRouter'], function(App, UserRouter){
  return App.module('User', {
    startWithParent: false,
    define: function(User, App, Backbone){
      'use strict';

      // Makes the application aware of the user routing structure.
      App.addInitializer(function(){
        new UserRouter();
      });
    }
  });
});