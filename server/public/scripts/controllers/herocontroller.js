heroApp.controller('heroController', ['$scope', '$http', function($scope, $http){
	console.log('heroController running');
	$scope.power=[];
	$scope.powerType = '';
	$scope.newHero={};



	$scope.powers = [
		{type: "invisibility", display: "Invisibility"},
		{type: "flight", display: "Flight"},
		{type: "superSpeed", display: "Super Speed"},
		{type: "heatVision", display: "Heat Vision"},
		{type: "superStrength", display: "Super Strength"},
		{type: "acceleratedHealing", display: "Accelerated Healing"},
		{type: "powerBlast", display: "Power Blast"},
		{type: "animalAffinity", display: "Animal Affinity"}

	];

	$scope.submitNewHero = function (){
		var data = $scope.newHero;
		$http.post('/create', data)
		.then(function(){
			console.log('POST /heroes', data);
			getHeroes();
		});
	};



	function getHeroes(){
		$http.get('/gethero')
		.then(function (response){
			console.log('GET /heroes', response.data);

			var heroDataArray = response.data;
			heroDataArray.forEach(function (hero){

			});
			$scope.heroes=heroDataArray;
		});
	}


}]);
