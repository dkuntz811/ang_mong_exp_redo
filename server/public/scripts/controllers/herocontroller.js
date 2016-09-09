heroApp.controller('heroController', ['$scope', '$http', function($scope, $http){
	console.log('heroController running');
	$scope.powers={};
	$scope.heroType='';
	$scope.heroes=[];

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

	function getHeroes(){
		$http.get('/heros')
		.then(function (response){
			console.log('GET /heros', response.data);

			var heroDataArray = response.data;
			heroDataArray.forEach(function (hero){

			});
			$scope.heroes=heroDataArray;
		});
	}


}])
