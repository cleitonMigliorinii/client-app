App.controller('RegisterController', function($scope, $auth, $http, Api) {

	$scope.form = { username: '', email: '', password: '', club_id: 0 };

	$scope.login = function() {
		
	  $auth.submitRegistration({
			email:                 $scope.form.email,
	    password:              $scope.form.password,
	    password_confirmation: $scope.form.password,
	    username:        			 $scope.form.username,
			club_id:							 $('#club_id').val()
		}).then(function(resp) {
				$location.path('/');
	    });
	};

	$scope.getClubs = function(){
		$http.get(Api + '/clubs.json')
		.then(function successCallback(response) {
			$scope.clubs = response.data.clubs;
		});
	};

	$scope.$on('auth:registration-email-error', function(ev, reason) {
			alert("Não foi possível criar um usuário. Tente novamente mais tarde!");
			console.log(reason);
	});

	$scope.getClubs();
});
