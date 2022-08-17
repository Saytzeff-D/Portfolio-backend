const EducationModel = require("../models/education.model")
const ExpertiseModel = require("../models/expertise.model")
const LanguageModel = require("../models/language.model")
const SkillModel = require("../models/skills.model")
const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const addExpertise = (req, res)=>{
    let details = req.body
    cloudinary.v2.uploader.upload(details.icon, {resoure_type: 'auto'}, (err, result)=>{
        if(!err){
            details.icon = result.secure_url
            const form = new ExpertiseModel(details)
            form.save((err, result)=>{
                if(!err){
                    res.status(200).json({message: 'Successfully Added'})
                }else{
                    res.status(300).json({message: 'Server Error'})
                }
            })
        }else{
            res.status(300).json({message: 'Cloudinary Error'})
        }
    })

}
const getExpertise = (req, res)=>{
    ExpertiseModel.find((err, result)=>{
        if(!err){
            res.json({result})
        }else{
            res.status(300).json('Server Error')
        }
    })
}
const delExpertise = (req, res)=>{
    ExpertiseModel.findByIdAndDelete(req.body._id, (err, result)=>{
        if(!err){
            res.json({status: true})
        }else{
            res.json({status: false})
        }
    })
}

const addEducation = (req, res)=>{
    let form =  new EducationModel(req.body)
    form.save((err)=>{
        if(!err){
            res.status(200).json({message: 'Added Successfully'})
        }else{
            res.status(300).json({message: 'Server Error'})
        }
    })
}
const getEducation = (req, res)=>{
    EducationModel.find((err, result)=>{
        if(!err){
            res.json({result})
        }else{
            res.status(300).json('Server Error')
        }
    })
}
const delEdu = (req, res)=>{
    EducationModel.findByIdAndDelete(req.body._id, (err)=>{
        !err ? res.send({status: true}) : res.send({status: false})
    })
}
const addSkill = (req, res)=>{
    let skills = req.body
    let skillForm = new SkillModel(skills)
    skillForm.save((err)=>{
        if(!err){
            res.status(200).json({message: 'Skill Added Successfully'})
        }else{
            res.status(300).json('Server Error')
        }
    })
}
const fetchAllSkill = (req, res)=>{
    SkillModel.find((err, result)=>{
        if(!err){
            res.send({result})
        }else res.status(300).send('Error Occurred')
    })
}
const delSkill = (req, res)=>{
    console.log(req.body)
    SkillModel.findByIdAndDelete(req.body._id, (err)=>{
        !err ? res.json({status: true}) : res.json({status: false})
    })
}
const addLanguage = (req, res)=>{
    let details = req.body
    let form = new LanguageModel(details)
    form.save((err)=>{
        if(!err){
            res.status(200).json({message: 'Language Added Successfully'})
        }else res.status(300).json('Server Error')
    })
}
const myLanguage = (req, res)=>{
    LanguageModel.find((err, result)=>{
        if(!err){
            res.send({result})
        }else res.status(300).send('Server Error')
    })
}
const delLanguage = (req, res)=>{
    LanguageModel.findByIdAndDelete(req.body._id, (err)=>{
        !err ? res.json({status: true}) : res.json({status: false})
    })
}

module.exports = { addExpertise, getExpertise, addEducation, getEducation, addSkill, fetchAllSkill, addLanguage, myLanguage, delEdu, delExpertise, delSkill, delLanguage }