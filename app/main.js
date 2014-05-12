require.config({
  paths: {
    app: 'app',
    backbone: 'libs/backbone/backbone',
    marrionette: 'libs/backbone/backbone.marionette',
    jquery: 'libs/jquery/jquery-1.11.1',
    underscore: 'libs/lodash',
    text: 'libs/require/plugins/text',
    handlebars: 'libs/handlebars-v1.3.0',
    hbs: 'libs/hbs.js'
  },
  shim: {
    handlebars: {
      exports: 'Handlebars'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  },
  hbs: {
    templateExtension: 'html',
    helperDirectory: "templates/helpers/"
  }
});

requirejs(['app'], function(App){
  App.start();
});