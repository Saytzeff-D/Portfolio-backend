const express = require('express')
const { addProject, getAllProject } = require('../controllers/project.controller')
const ProjectRouter = express.Router()

ProjectRouter.post('/addProject', addProject)
ProjectRouter.get('/allProject', getAllProject)

module.exports = ProjectRouter