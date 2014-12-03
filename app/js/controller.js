'use strict'

var complexwidgetControllers = angular.module('complexwidgetControllers', []);

complexwidgetControllers.controller('ComplexWidgetListController', ['$scope', '$http', function($scope, $http){
  var requestString = 'widgets/widgets.json';

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

complexwidgetControllers.controller('ComplexWidgetDetailController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.widgetId = $routeParams.widgetId;
}]);
