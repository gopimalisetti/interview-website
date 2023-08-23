const db = require('../database/connect.js')
const studentModel = require('../model/students.js')

const deleteAdminCommentApi = async (req,res) => {
      
    let docToUpdate = await studentModel.find({id : req.body.id})
    docToUpdate[0].comment[req.body.admin_id] = null
    
    let result = await docToUpdate[0].save()
    res.status(201).send({"deleted" : true})
}

module.exports = {
    deleteAdminCommentApi
}