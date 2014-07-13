define([
  'app',
  'user/collections/UserCollection',
  'user/views/DashboardView',
  'user/views/UsersView',
  'user/views/FiltersView',
  'user/data/Users'
  ], function(App, UserCollection, DashboardView, UsersView, FiltersView, Users){
    return function(){
      var 
        userCollection = new UserCollection(Users),
        dashboardView = new DashboardView(),
        usersView = new UsersView(),
        filtersView = new FiltersView();

      // Add to DOM
      App.main.show(dashboardView);
      App.aside.show(filtersView);

      //dashboardView.users.show(usersView);

      console.log(usersView);

      

      
      App.vent.on('click:filters', function(e){
        // var filteredDashboardView = new DashboardView({
        //   collection: userCollection.filterColour()
        // });

        userCollection.filterColour();

        // if ($(e.target).prop('checked')){
        //   App.main.show(filteredDashboardView);
        // } else {
        //   App.main.show(dashboardView);
        // }
      });
  };
});