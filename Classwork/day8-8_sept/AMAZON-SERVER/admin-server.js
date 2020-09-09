const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config = require('./config')
const jwt = require('jsonwebtoken')
//routers
const adminROuter = require('./admin/routes/admin')
const brantROuter = require('./admin/routes/brand')
const categoryROuter = require('./admin/routes/category')
const orderROuter = require('./admin/routes/order')
const productROuter = require('./admin/routes/product')
const reviewROuter = require('./admin/routes/review')



const { request, response } = require('express')


const app = express()

app.use(bodyParser.json())
app.use(morgan("combined"))
//app.use(morgan("tiny"))
// add the routes

//add a middleware for getting the id from token
function getUserId(request,response,next)
{       
    if(request.url == '/admin/signin' || request.url == '/admin/signup')
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


app.use('/admin',adminROuter)
app.use('/brand',brantROuter)
app.use('/category',categoryROuter)
app.use('/order',orderROuter)
app.use('/product',productROuter)
app.use('/review',reviewROuter)


//default router

app.get('/',(request,response) => {

    response.send('welcome to my application')
})








app.listen(4000,'0.0.0.0', () => {
    console.log(`server started on port 4000`)
})