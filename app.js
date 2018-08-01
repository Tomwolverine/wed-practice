const express = require('express')
const port = 7000
const app = express()

app.get('/',(request,response,next) => {
    response.send('scary cat')
})


app.listen(port, () => {
    console.log(`running on port ${port}`)
})