angular.module('quickinApp')
  .controller('guestListCtrl', function ($scope) {
  	$scope.GuestArray=[];
  		$scope.Guest = {}
  	$scope.addGuest = function(){
		console.log("guest added" +$scope.Guest)
		$scope.GuestArray.push($scope.Guest)
			$scope.Guest = {}
  	}
    
  });
