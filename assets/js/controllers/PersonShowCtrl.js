addressApp.controller('PersonShowCtrl', ['$scope','$location', '$routeParams', 'Person', function($scope,$location, $routeParams, Person){
  console.log('PersonShowCtrl init')

  $scope.person={}

  Person.get({id:$routeParams.id}).then(function(person){
    console.log(person)
    $scope.person = person;
  });



  // $scope.newContact = {
  //   name: '',
  //   email: '',
  //   street: '',
  //   city: '',
  //   state: '',
  //   zip: '',
  //   phone:''
  // }



  // $scope.createContact = function(){
  //   // console.log('create - ',$scope.newPerson)
  //   Person.add.contact($scope.newContact)
  //   Person.$save().then(function(contact){
  //     console.log('Contact - ', contact)
  //     $location.path('/person/'+Person.id);
  //   }).catch(function(err){
  //     alert('it did not twerk')
  //     console.log(err)
  //   });
  // }



}]);