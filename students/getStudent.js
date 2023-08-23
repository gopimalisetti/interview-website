const db = require('../database/connect.js')
const studentModel = require('../model/students.js')

  const getStudentApi = async (req,res) => {
     
      let response = await studentModel.find({id : req.body.id})
      res.status(201).send(response)
     
}

module.exports = {
    getStudentApi
}