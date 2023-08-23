const db = require('../database/connect.js')
const studentModel = require('../model/students.js')

 const updateStudentRatingApi = async (req,res) => {
      
    let docToUpdate = await studentModel.find({id : req.body.id})
    docToUpdate[0].rating = req.body.rating
    
    let result = await docToUpdate[0].save()
    res.status(201).send({"update" : true})
}

module.exports = {
    updateStudentRatingApi
}