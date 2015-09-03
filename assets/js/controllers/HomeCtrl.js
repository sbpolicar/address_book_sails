addressApp.controller('HomeCtrl', ['$scope','$modal', '$rootScope', 'Person', function($scope, $modal, $rootScope, Person){
  console.log('HomeCtrl init')

  $scope.person = []

  Person.query().then(function(person){
    $scope.person = person;
  });

  $scope.deletePerson = function (person){
    person.$delete();
  }

  $scope.editPerson = function(person){
    $modal.open({
      templateUrl:'/views/person/editModal.html',
      controller:'PersonEditModalCtrl',
      resolve:{
        editPerson: function(){
          return person;
        }
      }
    })
  }

}]);