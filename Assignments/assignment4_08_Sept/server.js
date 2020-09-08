const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { request, response } = require('express')
const customerRouter = require('./routes/customers')

const app = express()


app.use(morgan('combined'))
app.use(bodyParser.json())
//middleware
app.use('/customer',customerRouter)


//routes



app.get('/',(request,response) => {
    response.send('welcome to the application')
})




app.listen(3000,'0.0.0.0',() => {
    console.log(`server started on port 3000`)
})