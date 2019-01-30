const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

let _data = []

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/input', (req, res) => {
    console.log('Got Post Request')
    console.log(req.body)
    _data.push(req.body)
    console.log('Array:')
    _data.forEach(element => {
        console.log(element)
    });
})

app.get('/output', (req, res) => {
    res.json(_data)
})

app.use('/input', express.static('public/input'))
app.use('/output', express.static('public/output'))

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listen on Port ${port}...`)
})