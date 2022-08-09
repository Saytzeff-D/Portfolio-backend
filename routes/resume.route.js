const express = require('express')
const { addExpertise, getExpertise, addEducation, getEducation, addSkill, fetchAllSkill, addLanguage, myLanguage, delExpertise, delEdu, delSkill, delLanguage } = require('../controllers/resume.controller')
const ResumeRouter = express.Router()


ResumeRouter.post('/addExpertise', addExpertise)
ResumeRouter.get('/expertise', getExpertise)
ResumeRouter.post('/delExpert', delExpertise)
ResumeRouter.post('/education', addEducation)
ResumeRouter.get('/getEducation', getEducation)
ResumeRouter.post('/delEdu', delEdu)
ResumeRouter.post('/addSkill', addSkill)
ResumeRouter.get('/skill', fetchAllSkill)
ResumeRouter.post('/delSkill', delSkill)
ResumeRouter.post('/addLang', addLanguage)
ResumeRouter.get('/lang', myLanguage)
ResumeRouter.post('/delLang', delLanguage)

module.exports = ResumeRouter