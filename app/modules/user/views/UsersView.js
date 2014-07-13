define(['hbs!user/templates/user'], function(template){
  return  Backbone.Marionette.CollectionView.extend({
    childView: template
  });
});