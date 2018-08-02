const express = require('express')
const app = express()
const port = 7000
const queries = require('./queries')

app.get('/',(request,response,next) => {
    queries.getAll().then(cats => response.json({cats}))
})

app.listen(port, () => {
    console.log(`running on port ${port}`)
})