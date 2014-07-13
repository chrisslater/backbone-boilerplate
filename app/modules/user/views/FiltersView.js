define(['app', 'hbs!user/templates/filters'], function(App, template){
  return  Backbone.Marionette.ItemView.extend({
    template: template,
    events: {
      'click [type=checkbox]': 'checkbox'
    },
    checkbox: function(e){
      App.vent.trigger('click:filters', e);
    }
  });
});