angular.module( 'orgChart.appHeader', [])
.directive('appHeader', function(){
	return {
		replace: true,
		restrict: 'E',
		scope: {},		
		templateUrl: 'appheader/appheader.tpl.html',
		controller: function($scope, $window, employeeService) {			
			$scope.search = function(val) {
				return employeeService.search(val) 
				.then(function(result){ 
					//return result;
					var res= result.map(function(it){												
						//return it.firstName+" "+ it.lastName+", "+it.department;
						return it; 
					}); 
					return res; 
				});
			};
			/*var setClass = function() {
				var width = $($window).width();
				var isMobile = width <= 768;
				setAffix(isMobile);
			};

			var setAffix = function(flag) {				
				if (flag){
					$('#nav').affix({
						offset: {    //top: $('#header').height()-$('#nav').height()
							top: $('#header').height()
						}
					});
				} else{
					$(window).off('.affix');
					$("#nav").removeClass("affix affix-top affix-bottom")
						.removeData("bs.affix");
				}
			};*/
			$scope.init = function () {
				$(document).ready(function() {
					var widowSize = $(document).width();		
					console.log(widowSize);
					
					/////////////////
					//$('.close').fadeIn();
					$('.img-search').click(function() {
						$(this).animate({ width:0 }, 0);
						$('.mobile-div').animate({ width: 'toggle' }, 500, function(){
							$('.close').fadeIn();
							$('.close').css("right", "30px");

						});
					});
					$('.close').click(function() {
						$(this).animate({ width: 0 }, 500);
						$(this).fadeOut();
						$('.img-search').animate({width:25},500);				
						$('.mobile-div').fadeOut();						
					});

					if (widowSize <= 480) {
						$(window).scroll(function() {
						var height = $(window).scrollTop();
						console.log(height);
						if(height  > 1) {
							$(".navbar-header").slideUp(100);
							$(".pageheader-navcustom").slideUp(100);
							$('.legend-area').addClass("sticky");		
						}else{
							$('.legend-area').removeClass("sticky");
							$(".navbar-header").slideDown(100);
							$(".pageheader-navcustom").slideDown(100);
						}
					});
					}
					else{
						return false;
					}
					
					//setClass();
					// $(window).on("resize", function() {
					// 	if (sizeTimer) { clearTimeout(sizeTimer); }
					// 	var sizeTimer = setTimeout(function() {							
					// 		//setClass();
					// 	}, 0);
					// });
					// $(window).on("scroll", function() {
					// 	if (sizeTimer) { clearTimeout(sizeTimer); }
					// 	var sizeTimer = setTimeout(function() {					
					// 		//setClass();
					// 	}, 0);
					// });					
				});			
			};				
		} 
	};
});
