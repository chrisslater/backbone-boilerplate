define(['app', 'home/routers/homeRouter'], function(App, HomeRouter){
  return App.module('Home', {
    startWithParent: false,
    define: function(User, App, Backbone){
      'use strict';

      // Makes the application aware of the user routing structure.
      App.addInitializer(function(){
        new HomeRouter();
      });
    }
  });
});