/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	plus: function(req,res){
    console.log('we are here')
    Category.findOne({where:{id:req.params.categoryId}}).then(function(thisCategory){
      Person.findOne({where:{firstName:req.body.firstName, lastName:req.body.lastName}}).then(function(thisPerson){
        console.log('person - ',thisPerson)
        console.log('category - ',thisCategory)
        thisCategory.person.add(thisPerson);
        thisCategory.save(function(err, post){
          console.log(post)
          res.send(post)
        })
      })
    })
  }

};

