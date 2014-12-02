'use strict'

var complexwidgetApp = angular.module('complexwidgetApp', []);

complexwidgetApp.controller('ComplexWidgetListController', function($scope){
  $scope.widgets = [
    {'name': 'tonka truck',  'description': 'a trucks truck'},
    {'name': 'john deere A', 'description': 'green goodness'}
  ];

});
