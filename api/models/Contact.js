/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name:{
      type:'string',
      notEmpty:false,
      required:true
    },
    email:{
      type:'string',
      notEmpty:false,
      required:true,
      email:false
    },
    street:{
      type:'string',
      notEmpty:false,
      required:true
    },
    city:{
      type:'string',
      notEmpty:false,
      required:true
    },
    state:{
      type:'string',
      notEmpty:false,
      required:true
    },
    zip:{
      type:'string',
      notEmpty:false,
      required:true
    },
    phone:{
      type:'string',
      alphanumericdashed:true,
      notEmpty:false,
      required:true
    },
    person:{
      model:'Person'
    }
  }

};

