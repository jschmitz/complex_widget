'use strict'

var complexwidgetApp = angular.module('complexwidgetApp', []);

complexwidgetApp.controller('ComplexWidgetListController', ['$scope', '$http', function($scope, $http){
  var requestString = 'app/widgets/widgets.json';

  $http.get(requestString).
  success(function(data){
    $scope.widgets = data;
  }).
  error(function(data, status) {
          $scope.friendlyErrorMessage = "There was an error requesting your data";
          console.log("http status: " +
                      status +
                      "\n partial request string: " +
                      requestString);
  });
}]);
