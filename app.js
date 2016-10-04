(funtion (){
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController)
  .filter('loves',LovesFilter);

  MsgController.$inject = ['$scope', 'lovesFilter'];
 function MsgController($scope , lovesFilter){
   $scope.stateOfBeing = "hungry";

   $scope.sayMessage = function(){
     var msg ="priya likes to eat healthy food";
     return msg;
   };

   $scope.sayLovesMessage = function (){
     var msg = "priya likes to eat healthy food";
     msg = lovesFilter(msg)
     return msg;
   };
 };

})
