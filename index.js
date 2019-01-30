const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

let _data = {}

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

/* app.get('/input', (req, res) => {
    
})

app.get('/output', (req, res) => {
    
    res.send(JSON.stringify({text: "Hello from API!"}))
}) */

app.post('/input', (req, res) => {
    console.log('Got Post Request')
    console.log(req.body.name)
})

app.use('/input', express.static('public/input'))
app.use('/output', express.static('public/output'))

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listen on Port ${port}...`)
})