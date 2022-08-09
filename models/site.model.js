const mongoose = require('mongoose')

const siteSchema = mongoose.Schema({
    headerImg: {type: String, required: true },
    footerImg: {type: String, required: true }
})

const SiteModel = mongoose.model('site_tbs', siteSchema)
module.exports = SiteModel