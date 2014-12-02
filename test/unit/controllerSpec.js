'use strict'

describe('ComplexWigetListController', function(){
  beforeEach(module('complexwidgetApp'));

  it('should create "widget" model with 2 widgets', inject(function($controller){
    var scope = {},
        ctrl = $controller('ComplexWidgetListController', {$scope:scope});

    expect(scope.widgets.length).toBe(2);
  }));
});
