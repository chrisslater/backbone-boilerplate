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
    sinion: 'libs/sinion-1.9.1'
  }
});

require(['mocha', 'chai'], function(mocha, chai){
  console.log(mocha, chai);

  this.assert = chai.assert;
  this.expect = chai.expect;


});
