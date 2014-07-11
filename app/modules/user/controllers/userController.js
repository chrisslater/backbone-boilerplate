define(['app', 'user/views/dashboardView'], function(App, DashboardView){
  return function(params){
    new DashboardView();
  };
});