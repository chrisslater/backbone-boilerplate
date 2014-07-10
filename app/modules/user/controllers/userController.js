define(['app', 'hbs!templates/dashboard'], function(App, template){

  console.log(window.template = template());


  return function(){
    console.log('User Controller');
  };
});