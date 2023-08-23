const db = require('../database/connect.js')
const studentModel = require('../model/students.js')

const addStudentDetailsApi = async (req,res) => {
     
    let newStudentDoc = new studentModel({

        name : req.body.name,
        email : req.body.email,
        rating : req.body.rating,
        id : req.body.id,
        comment : { [req.body.admin_id] : req.body.comment},
    })

    let result = await newStudentDoc.save()
    res.status(201).send({"added" : true})
}

module.exports = {
    addStudentDetailsApi
}