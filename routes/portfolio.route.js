const express = require('express')
const { createProfile, myProfile, uploadPhoto, uploadHeaderImg, uploadFooterImg, uploadMyCv } = require('../controllers/portfolio.controller')
const PortfolioRouter = express.Router()

PortfolioRouter.post('/createProfile', createProfile)
PortfolioRouter.get('/profile', myProfile)
PortfolioRouter.post('/uploadPhoto', uploadPhoto)
PortfolioRouter.post('/uploadHeader', uploadHeaderImg)
PortfolioRouter.post('/uploadFooter', uploadFooterImg)
PortfolioRouter.post('/uploadCv', uploadMyCv)

module.exports = PortfolioRouter