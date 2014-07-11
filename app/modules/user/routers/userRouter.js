define(['app'], function(App){
	return Backbone.Router.extend({
    routes: {
      "user": "dashboard"
    },
    before: function(){
      App.startSubApp('User');
    },
    dashboard: function(){
      // Using require here so that controller is only called if page is hit.
      require(['user/controllers/userController'], function(UserController){
        new UserController();
      });
    }
  });
});