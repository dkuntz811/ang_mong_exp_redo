var heroApp = angular.module('heroApp', ['ngRoute']);
   console.log('routeProvider running');
heroApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.	
	when("/heroes", {
	templateUrl: "/views/partials/heroes.html",
	controller: "heroController"
}).
	when("/display", {
		templateUrl: "/views/partials/display.html",
		controller: "displayController"
}).
	otherwise({
		redirecTo: "/heroes"
});
}]);
