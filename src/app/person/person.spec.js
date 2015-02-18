describe( 'orgChart.person', function() {
  var scope, element, render;

  beforeEach(module('orgChart'));

 // Setup the mock service in an anonymous module.
  beforeEach(module(function ($provide) {
    $provide.value('employeeService', {
        //mock the employeeService here
    });
  }));

  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    var compileFn = $compile('<person-widget data="data" show-expand="true"></person-widget>');
    render = function(){
      element = compileFn(scope);
      scope.$digest();
    };

  }));

  it ('should have data', inject(function(employeeService){
    scope.data = {};
    render();

    expect(element.attr('data')).toBe('data');
  }));

  // it ('should have first name', inject(function(employeeService){    
  //   scope.data = { firstName: 'aa'};
  //   render();
  //   var ex = element.text();
  //   // console.log(element);

  //   var pos = ex.indexOf(scope.data.firstName.toUpperCase());
  //   expect(pos >=0).toBeTruthy();
  // }));   
});

