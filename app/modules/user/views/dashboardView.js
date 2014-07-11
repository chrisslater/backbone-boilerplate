define(['hbs!user/templates/dashboard'], function(template){

  var UserDashboardLayout = Backbone.Marionette.Layout.extend({
    el: '#app',
    template: template
  });

  return function(){
    new UserDashboardLayout().render();
  };
});