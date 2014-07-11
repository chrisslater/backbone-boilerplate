require.config({
  baseUrl: 'app/modules',
  paths: {
    text: '../libs/require/plugins/text',
    app: '../app',
    backbone: '../libs/backbone/backbone',
    marionette: '../libs/backbone/backbone.marionette',
    routeFilter: '../libs/backbone/backbone.routefilter',
    jquery: '../libs/jquery/jquery-1.11.1',
    underscore: '../libs/lodash',
    handlebars: '../libs/handlebars/handlebars',
    hbs: '../libs/hbs',
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
  }
});

require(['app']);