define(['underscore', 'user/models/UserModel'], function(_, UserModel){

    var UserCollection = Backbone.Collection.extend({
        model: UserModel,

        originalModels: null,

        initialize: function(models){
            this.originalModels = models;
        },

        

        filterColour: function(){

            var filtered = _.filter(this.models, function(model){
                return model.hasColour();
            });

            console.log(this.reset);

            this.reset(filtered);

            console.log(this);
        }
    });

    return UserCollection;
});