
angular.module('myApp')
.config(['$stateProvider', function($stateProvider) {
       
$stateProvider.state('viewlist', {
url:'/viewlist',
// views: {
   // 'login@': {
       templateUrl: 'viewlist/viewlist.html',
       controller: 'View4Ctrl',
                 
//     }
// }
});
}])