repApp.controller('voterCtrl', function($scope, constants, voterData, voterQs) {

  // make injected data about authed user available on $scope
  $scope.voterData = voterData;
  $scope.voterQs = voterQs;

});
