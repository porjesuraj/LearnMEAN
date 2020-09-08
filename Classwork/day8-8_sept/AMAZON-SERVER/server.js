const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config = require('./config')
const jwt = require('jsonwebtoken')
//routers
const userROuter = require('./routes/user')
const brantROuter = require('./routes/brand')
const categoryROuter = require('./routes/category')
const orderROuter = require('./routes/order')
const productROuter = require('./routes/product')
const reviewROuter = require('./routes/review')



const { request, response } = require('express')


const app = express()

app.use(bodyParser.json())
app.use(morgan("combined"))
//app.use(morgan("tiny"))
// add the routes

//add a middleware for getting the id from token
function getUserId(request,response,next)
{       
    if(request.url == '/user/signin' || request.url == '/user/signup')
    {
          next()
    }
    else
    {
    try {
        const token = request.headers['token']
        const data = jwt.verify(token, config.secret)
        //add a new key names userID with logged in user's id
        request.userId = data['id']
        //go to actual route
        next()
        
      } catch (ex) {
        response.status(401)
        response.send({status: 'error', error: 'protected api'})
      }

    }


}

app.use(getUserId)
//app.use((request,response,next) => {
//    
//})


app.use('/user',userROuter)
app.use('/brand',brantROuter)
app.use('/category',categoryROuter)
app.use('/order',orderROuter)
app.use('/product',productROuter)
app.use('/review',reviewROuter)


//default router

app.get('/',(request,response) => {

    response.send('welcome to my application')
})








app.listen(3000,'0.0.0.0', () => {
    console.log(`server started on port 3000`)
})