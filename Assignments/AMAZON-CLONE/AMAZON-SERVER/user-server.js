const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const jwt = require('jsonwebtoken')
// morgan : to keep logging entries
const morgan = require('morgan')
//swagger to docuement apis
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const cors = require('cors')

//routers
const userRouter = require('./user/routes/user')
const orderRouter = require('./user/routes/order')
const productRouter = require('./user/routes/product')
const cartRouter = require('./user/routes/cart')
const { request, response } = require('express')


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(morgan("combined"))
//app.use(morgan("tiny"))






//swagger init 
const options = {
  definition: {
    openapi: '3.0.0', 
    info: {
      title: 'Amazon clone user panel', // Title (required)
      version: '1.0.0', // Version (required)
      description : 'this is a express server applicaiton'
    },
  },
  // Path to the API docs
  apis: ['./user/routes/*.js'],
};

const swaggerSpec = swaggerJsDoc(options)

app.use('/userApiDocs',swaggerUi.serve,swaggerUi.setup(swaggerSpec) );




//add a middleware for getting the id from token
function getUserId(request,response,next)
{       
    if(request.url == '/user/signin' 
    || request.url == '/user/signup'
    || request.url == '/'
    || request.url.startsWith('/user/activate')
    || request.url.startsWith('/product/image'))
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
        response.send({status: 'error', error: 'protected api user'})
      }

    }


}

app.use(getUserId)
//app.use((request,response,next) => {
//    
//})
app.use(express.static('images/'))

// add the routes
app.use('/user',userRouter)
app.use('/order',orderRouter)
app.use('/product',productRouter)
app.use('/cart',cartRouter)
//default router

app.get('/',(request,response) => {

    response.send('welcome to my user side application')
})



app.listen(4000,'0.0.0.0', () => {
    console.log(`server started on port 4000`)
})