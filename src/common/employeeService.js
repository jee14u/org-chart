angular.module('orgChart.employeeService', [])
.service('employeeService', function(Restangular, $q, $timeout) {
	var empid = "";
	this.get = function(employeeId){		
		//URL /employee/employeeID
		//return Restangular.one('employee', employeeId);		
		var deferred = $q.defer();
		var employee = stubData[employeeId - 1];
		$timeout(function() {
			deferred.resolve(employee);
		}, 700);
		return deferred.promise;
	};

	this.search = function(searchText) { 
		var deferred = $q.defer();
		var employees = stubData; 
		$timeout(function(){ 
			deferred.resolve(employees); 
		}, 100); 
		return deferred.promise; 
	};
	
	this.searchData = function(searchText) { 
		//console.log(searchText);
		empid = searchText;
	};

	this.getTopPerson = function() {
		var deferred = $q.defer();
		var topEmployeeId = 1;
		var self = this;
		$timeout(function(){
			self.onTopId = topEmployeeId;
			deferred.resolve(topEmployeeId);
		}, 700);
		return deferred.promise;
	};

	this.goTop = function(){
		var self = this;
		return self.getTopPerson().then(function(topEmployeeId) {
			self.onTop = true;
			return self.setEmployee(topEmployeeId);
		});
    };

    this.setEmployee = function(id) {
		var self = this;
		var data = {};
		return self.get(id).then(function(employee) {					
			data.employee = employee;
			self.onTop = id === self.onTopId;

			data.reporters = [];
			var promises = employee.reporters.map(function(reporterId) {
				return self.get(reporterId).then(function(reporter){
					data.reporters.push(reporter);
				});
			});
			return $q.all(promises);			
		}).then(function() {
			self.data = data;
		});
    };

});

var stubData = [    { 
						employeeId: 1, reporters: [2,3, 4, 5], title: 'CEO', firstName: 'JOSEPH M.', lastName: 'TUCCI', 
						ext: '77248', mobilePhone: '1.508.293.6047', email: '33@gmail.com', employeeType: 'direct', 
						department:'Marketing Solutions', company:'Hopkinton, MA (176)', image: 'ceo.gif' 
					},
					{ 
						employeeId: 2, reporters: [], managerId: 1, title: 'CEO', firstName: 'PAMELA M', lastName: 'BUOTE', ext: '77248', 
						mobilePhone: '1.508.293.7248', email: '33@gmail.com', employeeType: 'direct', 
						department:'Legal Administration', company:'Hopkinton, MA (176)', image: 'pamela.gif' 
					},
					{ 
						employeeId: 3, reporters: [], managerId: 1, title: 'Legal Administration', firstName: 'PAUL T', lastName: 'DACIER', 
						mobilePhone: '1.508.293.7257', email: '33@gmail.com', employeeType: 'direct', 
						department:'Marketing Solutions', company:'Hopkinton, MA (176)', image: 'DACIER_PAUL.gif' 
					},
					{ 
						employeeId: 4, reporters: [6, 7, 8], managerId: 1, title: 'CTO', firstName: 'PATRICK', lastName: 'GELSINGER', 
						ext: '77248', mobilePhone: '777.888.9999', email: '33@gmail.com', employeeType: 'direct', 
						department:'Legal Administration', company:'Palo Alto, CA (Company)', image: 'patrick.gif' 
					},
					{ 
						employeeId: 5, reporters: [], managerId: 1, title: 'CFO', firstName: 'DAVID', lastName: 'GOULDEN', 
						ext: '77248', mobilePhone: '777.888.9999', email: '33@gmail.com', employeeType: 'admin', 
						department:'HR Management', company:'Palo Alto, CA (Company)', image: 'david.gif' 
					},
					{ 
						employeeId: 6, reporters: [9], managerId: 4, title: 'aaatitle', firstName: 'fred', lastName: 'fae', 
						ext: '77248', mobilePhone: '777.888.9999', email: '33@gmail.com', employeeType: 'direct',
						department:'Marketing Solutions', company:'Palo Alto, CA (Company)', image: 'u53.gif' 
					},
					{ 
						employeeId: 7, reporters: [], managerId: 4, title: 'btitle', firstName: 'george', lastName: 'ganda', 
						ext: '77248', mobilePhone: '777.888.9999', email: '33@gmail.com', employeeType: 'direct', 
						department:'Legal Administration', company:'Palo Alto, CA (Company)', image: 'u63.gif' 
					}, 
					{ 
						employeeId: 8, reporters: [], managerId: 4, title: 'ctitle', firstName: 'hana', lastName: 'hia', 
						ext: '77248', mobilePhone: '777.888.9999', email: '33@gmail.com', employeeType: 'direct', 
						department:'HR Management', company:'CSC, VA (Company)', image: 'u73.gif' 
					},
					{ 
						employeeId: 9, reporters: [], managerId: 6, title: 'dtitle', firstName: 'george', lastName: 'grey', 
						ext: '77248', mobilePhone: '777.888.9999', email: '33@gmail.com', employeeType: 'direct',
						matrixManager : { firstName: 'David', lastName: 'Gouldin', employeeId: 4 }, 
						department:'HR Management', company:'CSC, VA (Company)', image: 'u73.gif' 
					}
					// { 
					// 	employeeId: 10, reporters: [], managerId: 6, title: 'etitle', firstName: 'kevin', lastName: 'khan', 
					// 	ext: '77248', mobilePhone: '777.888.9999', email: '33@gmail.com', employeeType: 'direct', 
					// 	matrixManager : { firstName: 'David', lastName: 'Gouldin', employeeId: 4 }, 
					// 	department:'HR Management', company:'CSC, VA (Company)', image: 'u73.gif' 
					// }
				];
