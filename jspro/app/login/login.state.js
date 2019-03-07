
angular.module('myApp')
     .config(['$stateProvider', function($stateProvider) {
            
  $stateProvider.state('login', {
    url:'/login',
    // views: {
        // 'login@': {
            templateUrl: 'login/login.html',
            controller: 'View1Ctrl',
            controllerAs: 'vm',
                      
    //     }
    // }
  });
}])