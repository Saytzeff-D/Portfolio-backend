const express = require('express')
const { sendMessage, getAllMessages } = require('../controllers/hireMe.controller')
const HireRouter = express.Router()

HireRouter.post('/sendMessage', sendMessage)
HireRouter.get('/message', getAllMessages)

module.exports = HireRouter