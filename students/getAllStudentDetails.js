const db = require('../database/connect.js')
const studentModel = require('../model/students.js')

 const getAllStudentDetailsApi = async (req,res) => {
     
      let response = await studentModel.findAll()
      res.status(201).send(response)
     
}

module.exports = {
    getAllStudentDetailsApi
}