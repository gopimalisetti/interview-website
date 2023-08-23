const db = require('../database/connect.js')
const studentModel = require('../model/students.js')

 const updateAdminCommentApi = async (req,res) => {
     
    let docToUpdate = await studentModel.find({id : req.body.id})
    docToUpdate[0].comment[req.body.admin_id] = req.body.comment
    
    let result = await docToUpdate[0].save()
    res.status(201).send({"update" : true})
}

module.exports = {
    updateAdminCommentApi 
}