const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    projectName: String,
    projectDesc: String,
    mode: String,
    repoLink:  String,
    deployedLink: String
})

const ProjectModel = mongoose.model('project_tbs', projectSchema)

module.exports = ProjectModel