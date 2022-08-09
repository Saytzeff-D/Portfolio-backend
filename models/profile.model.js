const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    fullName: {type: String, required: true },
    career: {type: String, required: true },
    photo: {type: String, required: true },
    bio: {type: String, required: true },
    email: {type: String, required: true },
    mobile: {type: String, required: true },
    dob: {type: String, required: true },
    location: {type: String, required: true },
    address: {type: String, required: true },
    fb: {type: String, required: true },
    twi: {type: String, required: true },
    git: {type: String, required: true },
    inst: {type: String, required: true }
})

const ProfileModel = mongoose.model('profile_tbs', profileSchema)
module.exports = ProfileModel