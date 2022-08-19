const ProfileModel = require("../models/profile.model")
const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const createProfile = (req, res)=>{
    let profile = req.body
    let form = new ProfileModel(profile)
    ProfileModel.find((err, result)=>{
        if(!err){
            if(result.length == 0){
                form.save((err)=>{
                    if(!err){
                        res.status(200).json({message: 'Success'})
                    }else{
                        res.status(300).json({message: ' Error occurred', err})
                    }
                })
            }else{
                ProfileModel.findByIdAndUpdate(profile.editId, profile, (err, result)=>{
                    if(!err){
                        res.send({status: true, message: 'Success'})
                    }else{
                        res.status(300).send({status: false})
                    }
                })
            }
        }else{
            res.status(300).json({message: 'Error occurred'})
        }
    })
}
const myProfile = (req, res)=>{
    ProfileModel.find((err, result)=>{
        if(!err){
            res.json({result})
        }else{
            res.status(300).json('Server Error')
        }
    })
}
const uploadPhoto = (req, res)=>{
    let uploadDetails = req.body
    cloudinary.v2.uploader.upload(uploadDetails.photo, { resourece_type: 'auto', public_id: 'myPortfolio' }, (err, result)=>{
        if(!err){
            ProfileModel.findByIdAndUpdate(uploadDetails._id, {photo: result.secure_url}, (err, resp)=>{
                !err ? res.status(200).json({message: 'Success'}) : res.status(300).json('Server Error')
            })
        }else res.status(300).json('Cloudinary Error')
    })
}

const uploadHeaderImg = (req, res)=>{
    let uploadDetails = req.body
    cloudinary.v2.uploader.upload(uploadDetails.headerImg, { resource_type: 'auto' }, (err, result)=>{
        if(!err){
            ProfileModel.findByIdAndUpdate(uploadDetails._id, {headerImg: result.secure_url}, (err, resp)=>{
                !err ? res.status(200).json({message: 'Success'}) : res.status(300).json('Server Error')
            })
        }else res.status(300).json('Cloudinary Error')
    })
}

const uploadFooterImg = (req, res)=>{
    let uploadDetails = req.body
    cloudinary.v2.uploader.upload(uploadDetails.footerImg, { resource_type: 'auto' }, (err, result)=>{
        if(!err){
            ProfileModel.findByIdAndUpdate(uploadDetails._id, {footerImg: result.secure_url}, (err, resp)=>{
                !err ? res.status(200).json({message: 'Success'}) : res.status(300).json('Server Error')
            })
        }else res.status(300).json('Cloudinary Error')
    })
}

const uploadMyCv = (req, res)=>{
    let uploadDetails = req.body
    cloudinary.v2.uploader.upload(uploadDetails.myCv, { resource_type: 'auto', public_id: 'myPorfolioCv' }, (err, result)=>{
        console.log(result)
        if(!err){
            ProfileModel.findByIdAndUpdate(uploadDetails._id, {myCv: result.secure_url}, (err, resp)=>{
                !err ? res.status(200).json({message: 'Success'}) : res.status(300).json('Server Error')
            })
        }else res.status(300).json('Cloudinary Error')
    })
}

module.exports = { createProfile, myProfile, uploadPhoto, uploadHeaderImg, uploadFooterImg, uploadMyCv }