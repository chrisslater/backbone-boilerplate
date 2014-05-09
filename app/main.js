require.config({
  paths: {
    App: 'app',
    backbone: 'libs/backbone/backbone',
    jquery: 'libs/jquery/jquery-1.11.1',
    underscore: 'libs/lodash',
    text: 'libs/require/plugins/text'
  }
});

requirejs(['App'], function(App){
  App.start();
});