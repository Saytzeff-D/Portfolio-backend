const express = require('express')
const { addProject, getAllProject } = require('../controllers/project.controller')
const PortfolioRouter = express.Router()

PortfolioRouter.post('/addProject', addProject)
PortfolioRouter.get('/allProject', getAllProject)

module.exports = PortfolioRouter