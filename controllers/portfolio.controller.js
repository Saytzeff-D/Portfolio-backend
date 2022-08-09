const ProfileModel = require("../models/profile.model")

const createProfile = (req, res)=>{
    let profile = req.body
    let form = new ProfileModel(profile)
    ProfileModel.find((err, result)=>{
        if(!err){
            if(result.length !== 0){
                form.save((err)=>{
                    if(!err){
                        res.status(200).json({message: 'Success'})
                    }else{
                        res.status(300).json({message: ' Error occurred'})
                    }
                })
            }else{
                ProfileModel.findOneAndUpdate({photo: profile.photo}, profile, (err, result)=>{
                    if(!err){
                        console.log(result)
                        res.send({status: true})
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

module.exports = { createProfile }