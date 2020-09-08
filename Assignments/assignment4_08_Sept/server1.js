const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')

const { request, response } = require('express')
const customerRouter = require('./routes/customers')
const config = require('./config')
const app = express()


app.use(morgan('combined'))
app.use(bodyParser.json())
//middleware
function getToken(request,response,next)
{
    if(request.url == '/customer/signup' || request.url == '/customer/signin')
    {
        next()
    }
    else 
{
    try 
    {
        const token = request.headers['token']
   const data = jwt.verify(token,config.secret)

   request.userId = data['id']
   next()
    }
    catch (ex)
    {
          response.status(401)
          response.send({status : 'error', error : 'protected api'})
    }
}
  
}

app.use(getToken)
//routes
app.use('/customer',customerRouter)


app.get('/',(request,response) => {
    response.send('welcome to the application')
})




app.listen(3000,'0.0.0.0',() => {
    console.log(`server started on port 3000`)
})