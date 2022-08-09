const mongoose = require('mongoose')

const skillSchema = mongoose.Schema({
    skill: {type: String, required: true},
    grade: {type: String, required: true}
})

const SkillModel = mongoose.model('skill_tbs', skillSchema)

module.exports = SkillModel