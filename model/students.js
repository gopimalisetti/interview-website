
const mongoose = require("mongoose")
const validator = require('validator')


let studentSchema = mongoose.Schema({

    name :{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        validate : (value) => {
            return validator.isEmail(value)
        }
    },
    comment : {
        type : [String]
    },
    rating : {
        type : Number,
        required : true
    },
    id:{
      type : Number,
      required : true
    },
    createdAt : Date,
    updatedAt : Date
})

studentSchema.pre('save',function(next){

    this.updatedAt = Date.now()

    if(!this.createdAt) this.createdAt = this.updatedAt

    next()
})

let studentModel = mongoose.model('adminView',studentSchema)

module.exports = studentModel
