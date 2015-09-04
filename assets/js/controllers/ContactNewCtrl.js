addressApp.controller('ContactNewCtrl', ['$scope','$location', '$routeParams', 'Person', 'Contact', function($scope,$location, $routeParams, Person, Contact){
  console.log('This is the New Contact Controller')

  $scope.person = {}

  Person.get({id:$routeParams.person_id}).then(function(person){
    // console.log(person)
    $scope.person = person;
  });

  $scope.newContact = {
    name: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    phone:'',
    person:$routeParams.person_id
  }


  $scope.createContact = function(){
    var newEntry = new Contact($scope.newContact);
    newEntry.$save().then(function(createdEntry){
        console.log("conctact", createdEntry);
        $location.path("/");
    }).catch(function(err){
        alert(err);
        console.log("err", err);
    });
  };

}]);