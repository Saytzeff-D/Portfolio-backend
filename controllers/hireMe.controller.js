const HireMeModel = require("../models/hire.model")

const sendMessage = (req, res)=>{
    let data = req.body
    let hireForm = HireMeModel(data)
    hireForm.save((err)=>{
        if(!err){
            res.status(200).json({status: true})
        }else{
            res.status(200).json({status: false})
        }
    })
}

const getAllMessages = (req, res)=>{
    HireMeModel.find((err, result)=>{
        if(!err){
            res.json({status: true, result})
        }else{
            res.json({status: false})
        }
    })
}

module.exports = { sendMessage, getAllMessages }