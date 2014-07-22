require.config({
  paths: {
    chai: 'libs/chai',
    sinon: 'libs/sinon-1.9.1',
    backbone: 'libs/backbone/backbone',
    marionette: 'libs/backbone/backbone.marionette',
    routeFilter: 'libs/backbone/backbone.routefilter',
    jquery: 'libs/jquery/jquery-1.11.1',
    underscore: 'libs/lodash'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },    
    sinon: {
      exports: 'sinon'
    }
  },
  urlArgs: "bust=" +  (new Date()).getTime()
});

require(['chai', 'sinon', 'backbone'], function(mocha){
  var specs = [];
  var mocha = window.mocha;

  mocha.setup('bdd');

  specs.push('tests/user.spec.js');
  specs.push('tests/test.spec.js');
  
  require(specs, function(){
    mocha.run();
  });

});