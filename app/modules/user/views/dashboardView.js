define(['hbs!user/templates/dashboard'], function(template){

  var UserDashboardLayout = Backbone.Marionette.LayoutView.extend({
    el: '#app',
    template: template
  });

  return function(){
    new UserDashboardLayout().render();
  };
});