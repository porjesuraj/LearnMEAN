const express = require('express')
const bodyParser = require('body-parser')
const customerRouter = require('./routes/customer')
const pizzaRouter = require('./routes/pizza')
const app = express()
app.use(bodyParser.json())

app.use('/customer',customerRouter)
app.use('/pizza',pizzaRouter)


app.listen(3000,'0.0.0.0', () => {

    console.log('server started on port 3000')
})