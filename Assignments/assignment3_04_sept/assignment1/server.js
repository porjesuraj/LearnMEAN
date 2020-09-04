const express = require('express')
const bodyParser = require('body-parser')
const customerRouter = require('./routes/customer')

const app = express()
app.use(bodyParser.json())

app.use('/customer',customerRouter)



app.listen(3000,'0.0.0.0', () => {

    console.log('server started on port 3000')
})