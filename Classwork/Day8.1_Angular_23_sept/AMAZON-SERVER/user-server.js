const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const jwt = require('jsonwebtoken')
// morgan : to keep logging entries
const morgan = require('morgan')
//swagger to docuement apis
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

//routers
const userRouter = require('./user/routes/user')
const orderRouter = require('./user/routes/order')

const { request, response } = require('express')


const app = express()

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
    || request.url == '/logo.png'
    || request.url.startsWith('/user/activate'))
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

//default router

app.get('/',(request,response) => {

    response.send('welcome to my user side application')
})








app.listen(4000,'0.0.0.0', () => {
    console.log(`server started on port 3000`)
})