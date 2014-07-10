require.config({
  paths: {
    app: 'app',
    backbone: 'libs/backbone/backbone',
    marionette: 'libs/backbone/backbone.marionette',
    routeFilter: 'libs/backbone/backbone.routefilter',
    jquery: 'libs/jquery/jquery-1.11.1',
    underscore: 'libs/lodash',
    handlebars: 'libs/handlebars/handlebars',
    //handlebars: 'libs/handlebars/handlebars-runtime',
    text: 'libs/require/plugins/text',
    
    hbs: 'libs/hbs'

    // i18nprecompile: "libs/hbs/i18nprecompile",
    // json2: "libs/hbs/json2"
    //hbs: 'libs/require-handlebars-plugin/hbs',
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

  // hbs: {
  //  // templateExtension: 'html',
  //  // helperDirectory: "templates/helpers/",
  // }

});

require(['app']);