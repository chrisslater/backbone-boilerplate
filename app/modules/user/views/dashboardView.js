define(['hbs!user/templates/dashboard'], function(template){
  return  Backbone.Marionette.LayoutView.extend({
    template: template,
    regions: {
        users: '.users'
    }
  });
});