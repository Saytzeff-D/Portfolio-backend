const mongoose = require('mongoose')
const expertiseSchema = mongoose.Schema({
    expert: {type: String, required: true },
    expertDesc: {type: String, required: true},
    duration: { type: String, required: true }
})

const ExpertiseModel = mongoose.model('expertise_tbs', expertiseSchema)

module.exports = ExpertiseModel