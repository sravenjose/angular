(function () {


'use strict';

angular.module('myApp')
      .controller('View1Ctrl', View1Ctrl);
   
View1Ctrl.$inject = ['login_service','$window'];
function View1Ctrl(login_service,$window) {
  var vm=this;
  vm.submit=function(){
  login_service.login(vm.user).then(function (response) {
    // console.log(response)
    if (response.status==200) {
      $window.location = "/#!/viewlist";
      console.log("success");
    } else {
      console.log("error")
    }
 });

  }
}



})();