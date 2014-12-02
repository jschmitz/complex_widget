'use strict'

describe('ComplexWigetListController', function(){
  var scope, ctrl, $httpBackend;
  beforeEach(module('complexwidgetApp'));

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;

    scope = $rootScope.$new();
    ctrl = $controller('ComplexWidgetListController', {$scope: scope});
  }));

  it('should create "widget" model with 2 widgets', function(){
    $httpBackend.expectGET('app/widgets/widgets.json').
        respond([{name: 'tonka'}, {name: 'JD'}]);
    $httpBackend.flush();
    expect(scope.widgets.length).toBe(2);
  });

  it('should create "widget" model with 2 widgets', function(){
    $httpBackend.expectGET('app/widgets/widgets.json').
        respond(404, '');
    $httpBackend.flush();
    expect(scope.friendlyErrorMessage).toBeDefined();
  });
});
