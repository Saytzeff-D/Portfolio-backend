const express = require('express')
const bodyParser = require("body-parser");
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose');
const ProjectRouter = require('./routes/project.route');
const ResumeRouter = require('./routes/resume.route');
const PortfolioRouter = require('./routes/portfolio.route');
const HireRouter = require('./routes/hire.route');

app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))
app.use(bodyParser.json({limit: '50mb'}))
app.use(cors({origin: '*'}))
app.use('/project', ProjectRouter)
app.use('/resume', ResumeRouter)
app.use('/portfolio', PortfolioRouter)
app.use('/hire', HireRouter)
const port = process.env.PORT

app.get('/', (req, res)=> res.send('Welcome to DavifyRx Portfolio Server'))

mongoose.connect(process.env.URI, (err)=>{
    if(!err){
        console.log('Mongo Database Connected')
    }else{
        console.log('Mongoose Connection Error')
    }
})

app.listen(port, () => console.log(`My Portfolio server is listening on port ${port}`))