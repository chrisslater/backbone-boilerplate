define(function(){
  return Backbone.Model.extend({

    getFullname: function () {
        var firstname = this.get('firstname');
        var lastname = this.get('lastname');

        if (!(firstname || lastname)) {
            throw new Error('Firstname or Lastname are undefined');
        }

        return firstname + ' ' + lastname;
    },

    hasColour: function(){
        return this.attributes.colour !== undefined;
    }

  });
});