require.config({
  paths: {
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

require(['mocha', 'chai', 'sinon'], function(mocha){
  var specs = [];

  mocha.setup('bdd');
  specs.push('tests/test.spec.js');
  require(specs, function(){
    mocha.run();
  });
});