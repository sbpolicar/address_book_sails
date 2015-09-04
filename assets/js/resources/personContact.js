addressApp.factory('PersonContact', ['sailsResource', function(sailsResource){
  return sailsResource('Contact',{

  query:{
      method:'GET',
      url:'/api/person/:person_id/contact',
      isArray: true
    },
    get:{
      method:'GET',
      url:'/api/person/:person_id/contact/:id'
    },
    save:{
      method:'POST',
      url:'/api/person/:person_id/contact'
    }
  });
}])