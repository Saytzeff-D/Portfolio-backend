const ProjectModel = require("../models/projects.model")

const addProject = (req, res)=>{
    const project = req.body
    let form = new ProjectModel(project)
    form.save((err)=>{
        if(!err){
            res.status(200).json({message: 'Success'})
        }else{
            res.status(200).json({message: 'Server Error'})
        }
    })
}

const getAllProject = (req, res)=>{
    ProjectModel.find((err, result)=>{
        if(!err){
            res.json({project: result})
        }else{
            res.status(300).json({message: 'Server Error'})
        }
    })
}
module.exports = { addProject, getAllProject }