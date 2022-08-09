const mongoose = require('mongoose')

const languageSchema = mongoose.Schema({
    language: {type: String, required:  true},
    grade: {type: String, required: true}
})

const LanguageModel = mongoose.model('language_tbs', languageSchema)

module.exports = LanguageModel