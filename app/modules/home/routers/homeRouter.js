define(['app'], function(App){
	return Backbone.Router.extend({
    routes: {
      "": "home"
    },
    before: function(){
      App.startSubApp('Home');
    },
    home: function(){
      // Using require here so that controller is only called if page is hit.
      require(['home/controllers/homeController'], function(HomeController){
        new HomeController();
      });
    }
  });
});