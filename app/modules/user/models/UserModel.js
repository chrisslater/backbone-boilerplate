define(function(){
  return Backbone.Model.extend({

    hasColour: function(){
        return this.attributes.colour !== undefined;
    }

  });
});