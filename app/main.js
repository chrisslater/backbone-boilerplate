require.config({
  paths: {
    app: 'app',
    backbone: 'libs/backbone/backbone',
    marionette: 'libs/backbone/backbone.marionette',
    routeFilter: 'libs/backbone/backbone.routefilter',
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
    },
    marionette: {
      deps: ['underscore', 'backbone', 'jquery'],
      exports: 'Marionette'
    },
    routeFilter: {
      deps: ['backbone']
    }
  },
  hbs: {
    templateExtension: 'html',
    helperDirectory: "templates/helpers/"
  }
});

require(['app']);