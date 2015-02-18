describe( 'orgChart.appHeader', function() {
  var scope, element, render;
  
  beforeEach(module('orgChart'));
  beforeEach(inject(function($rootScope, $compile){
    scope = $rootScope.$new();
    var compileFn = $compile('<app-header header-text="text"></app-header>');
    render = function(){
      element = compileFn(scope);
      scope.$digest();
    };

  }));

  /*it ('should have page header text attribute', inject(function(){
    scope.text = 'name';
    render();
    
    expect(element.attr('header-text')).toBe('text');
  }));*/

  /*it ('should have page header text', inject(function(){    
    scope.text = 'abcde';
    render();
    var ex = element.text();

    var pos = ex.indexOf(scope.text);
    expect(pos >=0).toBeTruthy();
  }));   */
});

