require.config({
  paths: {
    App: 'app',
    backbone: 'libs/backbone/backbone',
    jquery: 'libs/jquery/jquery-1.11.1',
    underscore: 'libs/lodash',
    text: 'libs/require/plugins/text',

    // Testing
    mocha: 'libs/mocha',
    chai: 'libs/chai',
    sinon: 'libs/sinon-1.9.1'
  },
  shim: {
    mocha: {
      exports: 'mocha'
    },
    sinon: {
      exports: 'sinon'
    }
  },
  urlArgs: "bust=" +  (new Date()).getTime()
});

require(['mocha', 'chai', 'sinon'], function(mocha, chai, sinon){
  var specs = [];

  mocha.setup('bdd');

  specs.push('tests/test.spec.js');

  require(specs, function(){
    mocha.run();
  });

});
