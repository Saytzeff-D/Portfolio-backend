const expres = require('express')
const { createProfile, myProfile } = require('../controllers/portfolio.controller')
const PortfolioRouter = expres.Router()

PortfolioRouter.post('/createProfile', createProfile)
PortfolioRouter.get('/profile', myProfile)

module.exports = PortfolioRouter