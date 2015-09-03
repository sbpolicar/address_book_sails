addressApp.controller('NewPersonCtrl', ['$scope','$modal', '$location', 'Person', function($scope, $modal, $location, Person){
  console.log('NewPersonCtrl init')

  $scope.newPerson = {
    firstName:'',
    lastName:'',
    notes:''
  }

  $scope.createPerson = function(){
    // console.log('create - ',$scope.newPerson)
    var newPerson = new Person($scope.newPerson);
    newPerson.$save().then(function(PersonResult){
      console.log('Person - ',PersonResult )
      $location.path('/');
    }).catch(function(err){
      alert('it did not twerk')
      console.log(err)
    });
  }

}]);