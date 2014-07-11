define(['app', 'home/views/homeView'], function(App, HomeView){
  return function(params){
    new HomeView();
  };
});