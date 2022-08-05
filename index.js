const express = require('express')
const app = express()
const port = 8000
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))