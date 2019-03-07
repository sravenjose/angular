
angular.module('myApp')
.config(['$stateProvider', function($stateProvider) {
       
$stateProvider.state('course', {
url:'/course',
// views: {
   // 'login@': {
       templateUrl: 'course/course.html',
       controller: 'View3Ctrl',
       controllerAs: 'vm',
                 
//     }
// }
});
}])