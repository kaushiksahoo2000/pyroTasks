const path = require('path')
const express = require('express')
const port = process.env.PORT || 8080
const app = express()

const parser = require('body-parser')
app.use(parser.json())
const cors = require('cors')
app.use(cors())

app.use(express.static(__dirname + '/../client'))

var router = require('./stub.js') // TODO: switch to router.js for full functionality
app.use("/api", router)

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../client', 'app.html'))
})

app.listen(port)
console.log("Listening on " + port)
