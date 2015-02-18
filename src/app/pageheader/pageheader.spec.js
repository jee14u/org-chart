describe( 'orgChart.pageHeader', function() {
  var scope, element, render;
  
  beforeEach(module('orgChart'));
  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    var compileFn = $compile('<page-header app-name="name"></page-header>');
    render = function(){
      element = compileFn(scope);
      scope.$digest();
    };

  }));

  it ('should have app name attribute', inject(function(){
    scope.name = 'name';
    render();
  // console.log(element);
    expect(element.attr('app-name')).toBe('name');
  }));

   it ('should have app name', inject(function(){    
    scope.name = 'abcde';
    render();
    var ex = element.text();

    var pos = ex.indexOf(scope.name);
      expect(pos >=0).toBeTruthy();
    }));   
  });

