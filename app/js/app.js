var complexwidgetApp = angular.module('complexwidgetApp', [
  'ngRoute',
  'complexwidgetControllers'
]);

complexwidgetApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/widgets', {
        templateUrl: 'partials/widget-list.html',
        controller: 'ComplexWidgetListController'
      }).
      when('/widgets/new', {
        templateUrl: 'partials/widget-new.html',
        controller: 'ComplexWidgetNewController'
      }).
      when('/widgets/:widgetId', {
        templateUrl: 'partials/widget-detail.html',
        controller: 'ComplexWidgetDetailController'
      }).
      otherwise({
        redirectTo: '/widgets'
      });
  }
]);
