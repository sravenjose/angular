
angular.module('myApp')
.config(['$stateProvider', function($stateProvider) {
       
$stateProvider.state('reg', {
url:'/reg',
// views: {
   // 'login@': {
       templateUrl: 'reg/reg.html',
       controller: 'View2Ctrl',
       controllerAs: 'vm',
                 
//     }
// }
});
}])