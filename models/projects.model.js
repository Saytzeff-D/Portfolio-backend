const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    projectName: {type: String, required: true},
    projectDesc: {type: String, required: true},
    mode: {type: String, required: true},
    majorLang: {type: String, required: true},
    repoLink:  {type: String, required: true},
    deployedLink: String
})

const ProjectModel = mongoose.model('project_tbs', projectSchema)

module.exports = ProjectModel