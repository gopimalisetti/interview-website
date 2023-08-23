

const express = require('express')

const { updateAdminCommentApi } = require('./students/updateAdminComment')
const { addStudentDetailsApi } = require('./students/addStudentDetails')
const { deleteAdminCommentApi } = require('./students/deleteAdminComment')
const { getAllStudentDetailsApi } = require('./students/getAllStudentDetails')
const { updateStudentRatingApi } = require('./students/updateStudentRating')
const { getStudentApi } = require('./students/getStudent')
const app = express()


app.get('/getAllStudentDetails',getAllStudentDetailsApi)

app.post('/addStudentDetails',addStudentDetailsApi)

app.put('/updateStudentRating',updateStudentRatingApi)

app.put('/updateAdminComment',updateAdminCommentApi)

app.delete('/deleteAdminComment',deleteAdminCommentApi)

app.get('/getStudent',getStudentApi)

const port = 3101;
app.listen(port,() => {
    console.log("i'm listening")
})