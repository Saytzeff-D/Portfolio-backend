const mongoose = require('mongoose')

const hireMeSchema = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    message: String
})

const HireMeModel = mongoose.model('hireMe_tbs', hireMeSchema)
module.exports = HireMeModel