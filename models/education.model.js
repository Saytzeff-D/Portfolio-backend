const mongoose = require('mongoose')
const educationSchema = mongoose.Schema({
    cert: {type: String, required: true },
    dateObtained: { type: String, required: true },
    schoolObtained: { type: String, reuired: true }
})

const EducationModel = mongoose.model('education_tbs', educationSchema)

module.exports = EducationModel